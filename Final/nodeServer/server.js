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


    socket.on('player1WasShot', function (data10) {
        io.sockets.emit('player1Hurt',{
        	player1ShotBool: data10
        });
    });


    socket.on('player2WasShot', function (data11) {
        io.sockets.emit('player2Hurt',{
        	player2ShotBool: data11
        });
    });


    socket.on('player3WasShot', function (data12) {
        io.sockets.emit('player3Hurt',{
        	player3ShotBool: data12
        });
    });


    socket.on('player4WasShot', function (data13) {
        io.sockets.emit('player4Hurt',{
        	player4ShotBool: data13
        });
    });

    socket.on('player1Health', function (data14) {
        io.sockets.emit('player1LifeBar',{
        	player1HealthData: data14
        });
    });

    socket.on('player2Health', function (data15) {
        io.sockets.emit('player2LifeBar',{
        	player2HealthData: data15
        });
    });

    socket.on('player3Health', function (data16) {
        io.sockets.emit('player3LifeBar',{
        	player3HealthData: data16
        });
    });

    socket.on('player4Health', function (data17) {
        io.sockets.emit('player4LifeBar',{
        	player4HealthData: data17
        });
    });

    socket.on('player1Score', function (data18) {
        io.sockets.emit('player1Kills',{
            player1KillsNum: data18
        });
    });

    socket.on('player2Score', function (data19) {
        io.sockets.emit('player2Kills',{
            player2KillsNum: data19
        });
    });

    socket.on('player3Score', function (data20) {
        io.sockets.emit('player3Kills',{
            player3KillsNum: data20
        });
    });

    socket.on('player4Score', function (data21) {
        io.sockets.emit('player4Kills',{
            player4KillsNum: data21
        });
    });

});