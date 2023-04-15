const express = require('express');
const app = express();
const port = 5000;

const {getUser, getUsers} = require('./database.js');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/users', async (req,res) => {
    res.send(await getUsers());
});

app.listen(port, () => {
    console.log('IBM server listening on port ' + port)
});