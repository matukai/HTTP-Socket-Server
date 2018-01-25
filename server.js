
const net = require('net');
const {index, hydrogen, helium, notFound, styles} = require('./server-content');


const server = net.createServer((req, res) => {
  //conection listener
console.log('client connected');

req.on('end', () => {
  console.log('client disconnected');
});

req.setEncoding('utf8');

req.on('data', function (data) {
  let request = data.toString();
  requestHandler(req,request);

});


function requestHandler (req,request) {

  let headRequest = request.split('\r\n');
  let headerLine = headRequest[0];
  let headerLineArray = headerLine.split(' ');

  let requestMethod = headerLineArray[0];
  let uri = headerLineArray[1];
  let ver = headerLineArray[2];

  let responseHeader1 = 'HTTP/1.1'
  let codeOK = ' 200 OK';
  let codeNotFound = ' 400 Not Found';
  let serverName = 'Server: localhost:8080';
  let current = new Date()
  let today = 'Date: ' + current.toGMTString();

  let response;
  let responseHead = responseHeader1 + codeOK + '\n' + serverName + '\n' + today + '\n';

  console.log(responseHead);

  if(uri === '/' || '/index.html'){
    // return response head and module index
    response = responseHead + '\n' + index;
    console.log(response)
    req.write(response);
    req.end();
  }
  // else if(uri === '/hydrogen.html'){
  //   response = resonseHead + hydrogen;
  //   req.write(response);

  // }else if(uri === '/helium.html'){
  //   response = responseHead + helium
  //   req.write(response);

  // }else if(uri === '/404.html'){
  //   response = responseHead + notFound;
  //   req.write(response);

  // }else if(uri === 'css/styles.css'){
  //   response = responsHead + styles
  //   req.write(response);
  // }



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


























