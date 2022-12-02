import socket from './socket/socket';
import connectDB from './db/datasource';
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

connectDB;

socket(server);

server.listen(3000, () => {
  console.log('server is running on port 3000');
});
