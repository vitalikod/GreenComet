const express = require('express');
const server = express();
port = 3000;

server.get('/', (req, res) => {
    res.send('we work');
});

server.get('/catalog/:id/cat/:path', (req, res) => {
    const id = req.params.id;
    const path = req.params.path;
    res.send(`this is catalog id ${id} and path ${path}`);
});

server.route('/user').get((req, res) => {
    res.send('get user...');
}).post((req, res) => {
    res.send('create user...');
});

server.listen(port, () => {
    console.log(`server on port ${port}`);
})