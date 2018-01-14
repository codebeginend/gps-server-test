net = require('net');

var sockets = [];

var s = net.Server(function(socket) {
    socket.on('data', function(d) {
            console.log(d.toString('utf-8'));
    });
});

s.listen(8090);
