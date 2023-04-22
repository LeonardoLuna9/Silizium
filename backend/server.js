// Requirements
const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passportLocal = require('passport-local');
require('dotenv').config();

// Database queries
const {getUser, getUsers} = require('./database.js');

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
                const validPassword = await matchPassword(password, user.password);
                if(validPassword && user.length != 0){
                    console.log("User found");
                    return done(null, user);
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
app.post('/login', passport.authenticate('local', { failureRedirect: '/' }),
function(req, res) {
  res.redirect('/users');
});

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/users', (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    else {
        res.redirect("/");
    }
}, async (req,res) => {
    res.send(await getUsers());
});

app.listen(port, () => {
    console.log('IBM server listening on port ' + port)
});