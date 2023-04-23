// Requirements
const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passportLocal = require('passport-local');
require('dotenv').config();

// Database queries
const {getUser, getUsers, setUser} = require('./database.js');

// Encryption
const { encryptPassword, matchPassword } = require('./lib/helpers');

// Settings
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.PARSER_SECRET));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal(
    function(username, password, done) {
        try {
            getUser(username).then(async (user) => {
                if(user){
                    const validPassword = await matchPassword(password, user.password);
                    if (validPassword) {
                        console.log("User found");
                        return done(null, user);
                    }
                }
                console.log("User not found");
                return done(null, false);
            });
        }
        catch(error){
            console.log(error);
            return done(error);
        }   
    }
));

passport.serializeUser(function(user,done){
    done(null, user.uid);
});

passport.deserializeUser(async function(uid,done){
    getUser(uid).then((user) => {
        done(null, user);
    }); 
});

// Routes
// ================================================================================

// Login
app.post('/login', (req, res, next) => {
    if(req.isAuthenticated()){
        res.status(200).send('Ok'); // If it's already logged in
    }
    else {
        return next(); // We continue if not
    }
}, passport.authenticate('local'),
function(req, res) {
  res.status(200).send({ response: 'Ok' }); // We return Ok if we log in
});

// Logout
app.post('/logout', (req, res, next) => {
    if(req.isAuthenticated()){
        return next(); // If i't authenticated it may continue
    }
    else {
        res.status(200).send('Ok'); // If it's already logged off we stop him there
    }
}, function(req, res, next){ // We use passport logout
    req.logout(function(err) {
      if (err) { return next(err); }
        res.status(200).send('Ok');
    });
  });

// Register 
app.post('/register', (req, res, next) => {
    if(req.isAuthenticated()){
        return next(); // Only users can continue
    }
    else {
        res.status(401).send('Unauthorized');
    }
}, async (req, res) => {
    try {
        // If user is authorized to modify table
        if (req.user.role === process.env.USER_POWER) {
            const password = await encryptPassword(req.body.password);
            // We add new user
            setUser(req.body.username, password).then((success)=>{
                if (success) {
                    res.status(201).send({ response: 'Created' });
                }
                else {
                    res.status(500).send({ response: 'Internal Server Error' });
                }
            });
        }
        else {
            res.status(401).send('Unauthorized');
        }
    }
    catch(error){
        console.log(error);
        res.status(500).send({ response: 'Internal Server Error' });
    }
});

// Delete
app.post('/delete', (req, res, next) => {
    if(req.isAuthenticated()){
        return next(); // Only users can continue
    }
    else {
        res.status(401).send('Unauthorized');
    }
}, async (req, res) => {
    try {
        // If user is authorized to modify table
        if (req.user.role === process.env.USER_POWER) {
            // We update table
        }
        else {
            res.status(401).send('Unauthorized');
        }
    }
    catch(error){
        console.log(error);
        res.status(500).send({ response: 'Internal Server Error' });
    }
});

// Get Users
app.get('/users', (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    else {
        res.status(401).send('Unauthorized');
    }
}, async (req,res) => {
    res.send(await getUsers());
});

// Test
app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log('IBM server listening on port ' + port)
});

//TODO: 'DELETE' (REALMENTE ES UN UPDATE) a los usuarios
//TODO: 'cambio de password' PROBABLEMENTE
//TODO: 'en el login verificar si el usuario ya esta eliminado'
//TODO: 'en caso de volver a registrar un usuario ya borrado hacer update al status'
//TODO: 'QUERYS RELACIONADAS AL EXCEL'
//TODO: 'POSIBLE DOBLE AUTENTIFICACION???' (PROBLAMENTE)
//TODO: 'BUSCADOR (ENDPOINT-QUERY BUSCADOR)'