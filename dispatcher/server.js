const http = require('http')
const fs = require('fs')
const server = http.createServer(function(request, response) {
  console.dir(request.param)

  if (request.method == 'POST') {
    console.log('POST')
    request.on('data', function(data) {
      let rawdata = fs.readFileSync('./../veszjel_application/components/database/db.json');
      if(rawdata.length>0){
        rawdata=rawdata.toString().substring(0, rawdata.length - 2);
        rawdata += ', '+  data + ']}';
      } else 
      {
          rawdata='{"problems":[' + data + ']}';
      }
      fs.writeFileSync('./../veszjel_application/components/database/db.json', rawdata);
    })
  } else {
    fs.readFile('./app.html', function (err, html) {

        if (err) throw err;    
    
    console.log('GET')
   
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end(html)
    });
  }
})
const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)