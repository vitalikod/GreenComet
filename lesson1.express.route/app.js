const express = require('express');
const server = express();
const port = 3000;

server.get('/', (req, res) => {
    res.send('love my family')
});
server.listen(port, console.log(`server start on port ${port}`));