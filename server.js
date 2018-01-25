
const net = require('net');

const server = net.createServer((req, res) => {
  //conection listener
console.log('client connected');

req.on('end', () => {
  console.log('client disconnected');
});

req.setEncoding('utf8');

req.on('data', function (data) {
  let request = data.toString();
  requestHandler(request);

});

function requestHandler (request) {

  let head = request.split('\r\n');
  let headerLine = head[0];
  let headerLineArray = headerLine.split(' ');

  let requestMethod = headerLineArray[0]
  let uri = headerLineArray[1]
  let ver = headerLineArray[2]
  console.log(requestMethod);
  console.log(uri);
  console.log(ver);

}// end requestHandler

})// end createServer










//binds to port number
server.listen(8080, () => {
  console.log('listening to port 8080');
});
//throw error 
server.on('error', (err) => {
  throw err;
});