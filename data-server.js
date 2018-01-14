net = require('net');

var sockets = [];

var s = net.Server(function(socket) {
    socket.on('data', function(d) {
            console.log(d.toString('ascii'));
    });
});

s.listen(8090);
