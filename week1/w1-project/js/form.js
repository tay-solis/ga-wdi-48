const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hewwo World\n')
}).listen(8000);

console.log('Server running');

const express=require('express');
const app=express();
//
// const { body,validationResult } = require('express-validator/check');
// const { sanitizeBody } = require('express-validator/filter');
//

app.get('/', (req,res)=>{
  res.send('Hewwo World')
});

app.post('/user', (req,res) => {
  res.send('Hewwo world');
});

app.listen(3000, () =>{
  console.log('Express is listening')
});
