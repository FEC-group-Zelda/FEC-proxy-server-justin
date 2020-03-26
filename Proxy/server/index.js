const express = require('express');
const morgan = require('morgan');
const path = require('path');
const port = process.env.PORT || 3001;
const cors = require('cors');

const server = express();

server.use(morgan('dev'));
server.use(express.static(path.join(__dirname, '/../public')));
server.use(cors());

server.listen(port, () => {
  console.log(`proxy server listening on ${port}`);
});