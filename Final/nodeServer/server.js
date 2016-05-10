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

    // socket.on('new message', function (data) {
    //     socket.emit('test message',{
    //     	message: data
    //     });
    // });


    socket.on('player1XPosition', function (data) {
        socket.emit('player1XPositionUpdated',{
        	position1X: data
        });
    });

    socket.on('player1YPosition', function (data) {
        socket.emit('player1YPositionUpdated',{
        	position1Y: data
        });
    });


    socket.on('player2XPosition', function (data) {
        socket.emit('player2XPositionUpdated',{
        	position2X: data
        });
    });

    socket.on('player2YPosition', function (data) {
        socket.emit('player2YPositionUpdated',{
        	position2Y: data
        });
    });


    socket.on('player3XPosition', function (data) {
        socket.emit('player3XPositionUpdated',{
        	position3X: data
        });
    });

    socket.on('player3YPosition', function (data) {
        socket.emit('player3YPositionUpdated',{
        	position3Y: data
        });
    });


    socket.on('player4XPosition', function (data) {
        socket.emit('player4XPositionUpdated',{
        	position4X: data
        });
    });

    socket.on('player4YPosition', function (data) {
        socket.emit('player4YPositionUpdated',{
        	position4Y: data
        });
    });


    socket.on('worldMapData', function (data) {
    	socket.emit('worldMapDataUpdated',{
    		worldMapVar: data
    	});
    });

});