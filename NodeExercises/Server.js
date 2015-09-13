/**
 * Created by greddy on 12/4/2014.
 */
var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    mime = require('mime'),
    cache = {},
    app = require('./app.js'),
    amqp = require('amqp'),
    rabbitMq = amqp.createConnection({url: "amqp://guest:guest@localhost:5672"}),
    stringDecoder = require('string_decoder').StringDecoder;

function writeHttpError(response, errorStatusCode, errorMsg){
    response.writeHead(errorStatusCode, {'Content-Type': 'text/plain'});
    response.write(errorMsg);
    response.end();
}

function writeFileData(response, filePath, fileContents){
    response.writeHead(200, {'Content-Type': mime.lookup(path.basename(filePath))});
    response.end(fileContents);
}

function getStaticFile(response, cache, absPath){
    if(cache[absPath]){
        writeFileData(response, absPath, cache[absPath]);
    }
    else {
        fs.exists(absPath, function(exists){
           if(exists){
               fs.readFile(absPath, function(err, data){
                    if(err){
                        writeHttpError(response, 500, 'Internal error.');
                    } else {
                        cache[absPath] = data;
                        writeFileData(response, absPath, data);
                    }
               })
           } else {
               writeHttpError(response, 404, 'Resource not found.');
           }
        });
    }
}


app.set('port', process.env.PORT || '1500');
var server = app.listen(app.get('port'), function(req, res){
    
    console.log('server listening on 127.0.1.1:1500');
});

/*
var io =require('socket.io')(server);

rabbitMq.on('ready', function () {

    io.on('connection', function(socket) {

        console.log('in sockets');

        socket.emit('ConnectionSuccess', { message: 'success' });

        // listen to chat message from the client
        socket.on('ChatMessageEvent', function (message) {
            console.log('chat message from client -' + message);
        });

        // subscribe to queues
        var queue = rabbitMq.queue('test-queue', { durable:true, autoDelete: false}, function(q) {
            console.log(q.name);
        });
        queue.on('error', function (error) { console.log(error);});
        queue.bind('#');
        queue.subscribe(function (message, headers) {
            var decoder = new stringDecoder('utf8');
            console.log(decoder.write(message.data));

            socket.emit('server-chat-message', decoder.write(message.data));
        });

    });
}); */