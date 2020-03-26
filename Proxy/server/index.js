const express = require('express');
const morgan = require('morgan');
const path = require('path');
const port = process.env.PORT || 3001;

const server = express();

server.use(morgan('dev'));
server.use(express.static(path.join(__dirname, '/../public')));

server.listen(port, () => {
  console.log(`proxy server listening on ${port}`);
});