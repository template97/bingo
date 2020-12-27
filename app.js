const express =require('express');
const socket= require('socket.io');

const http = require('http');
const { response } = require('express');

const app  = express();
const server = http.createServer(app)

const io = socket(server);


app.get('/', (request, response)=>{
    console.log("user connected to server");
    response.send("hello! express server!");
})
server.listen(8080, ()=>{console.log("server executing..")})