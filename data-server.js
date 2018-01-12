net = require('net');

var sockets = [];

var s = net.Server(function(socket) {

    sockets.push(socket);

    socket.on('data', function(d) {

        for (var i=0; i < sockets.length; i++ ) {
            this.do_log(sockets[i].write(d));
        }
    });
});

s.listen(8090);
