var net = require('net');
var client = net.connect({port: 8090}, function() {
   console.log('connect successfull!');
});
client.on('ping', function(data) {
   console.log(data.toString());
   client.end();
});
