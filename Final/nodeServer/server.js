// Setup basic express server
var express = require("express");
var app = express();//create instance of express
var port = 3000;
var url='localhost'
var server = app.listen(port);
var io = require("socket.io").listen(server);//socket io listen on port

app.use(express.static(__dirname + '/'));//serve diectory this file is in
console.log('Simple static server listening at '+url+':'+port);

io.on('connection', function (socket) {

    socket.on('new message', function (data) {
        io.sockets.emit('test message',{
        	message: data
        });
    });


    socket.on('player1XPosition', function (data1) {
        io.sockets.emit('player1XPositionUpdated',{
        	position1X: data1
        });
    });

    socket.on('player1YPosition', function (data2) {
        io.sockets.emit('player1YPositionUpdated',{
        	position1Y: data2
        });
    });


    socket.on('player2XPosition', function (data3) {
        io.sockets.emit('player2XPositionUpdated',{
        	position2X: data3
        });
    });

    socket.on('player2YPosition', function (data4) {
        io.sockets.emit('player2YPositionUpdated',{
        	position2Y: data4
        });
    });


    socket.on('player3XPosition', function (data5) {
        io.sockets.emit('player3XPositionUpdated',{
        	position3X: data5
        });
    });

    socket.on('player3YPosition', function (data6) {
        io.sockets.emit('player3YPositionUpdated',{
        	position3Y: data6
        });
    });


    socket.on('player4XPosition', function (data7) {
        io.sockets.emit('player4XPositionUpdated',{
        	position4X: data7
        });
    });

    socket.on('player4YPosition', function (data8) {
        io.sockets.emit('player4YPositionUpdated',{
        	position4Y: data8
        });
    });


var worldMapVar = {}; 

    socket.on('worldMapData', function (data9) {
    	io.sockets.emit('worldMapDataUpdated',{
    		worldMapVar: data9
    	});
    });

});