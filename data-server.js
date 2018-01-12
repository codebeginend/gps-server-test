net = require('net');

var sockets = [];

var s = net.Server(function(socket) {
    socket.on('data', function(d) {
            console.log(d.toString('hex'));
    });
});

s.listen(8090);
