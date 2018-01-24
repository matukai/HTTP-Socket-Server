
const net = require('net')

const server = net.createServer((req) => {

// connection listener
console.log('client connected');

req.on('end', () => {
  console.log('client disconnected')
});

req.setEncoding('utf8');

req.on('data', function (chunk) {
  console.log(chunk.toString());
})

req.write('hello connection');

})// end createServer

server.listen(8080, function listen() {
  console.log('listening to port 8080');
});

server.on('error', (err) => {
  throw err;
});

