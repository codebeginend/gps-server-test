net = require('net');

var sockets = [];

var s = net.Server(function(socket) {
    socket.on('data', function(d) {
            console.log(d);
    });
});

s.listen(8090);
