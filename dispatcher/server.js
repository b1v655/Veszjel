const http = require('http')
const fs = require('fs')
const server = http.createServer(function(request, response) {
  console.dir(request.param)

  if (request.method == 'POST') {
    console.log('POST')
    request.on('data', function(data) {
      let rawdata;
      if(JSON.parse(data).longitude==null)
         rawdata= fs.readFileSync('./../veszjel_application/components/database/reports.json');  
      else
         rawdata = fs.readFileSync('./../veszjel_application/components/database/db.json');
      let rd;
      if(rawdata.length>0){
        rawdata=rawdata.toString();
        rd=rawdata.substring(0, rawdata.length - 2);
        console.log(rd);
        rd += ', '+  data + ']}';
      } else 
      {
          rd='{"problems":[' + data + ']}';
      }

      if(JSON.parse(data).longitude==null)
        fs.writeFileSync('./../veszjel_application/components/database/reports.json', rd);
      else
        fs.writeFileSync('./../veszjel_application/components/database/db.json', rd);
    })
  } else {
    fs.readFile('./app.html', function (err, html) {

        if (err) throw err;    
    
    console.log('GET')
   
    response.writeHead(200, {'Content-Type': 'text/html'})
    
    let mydata = fs.readFileSync('./../veszjel_application/components/database/reports.json');
     let my=JSON.parse(mydata.toString());
     html+='<table><tr><th>Helység</th><th>Hibajelentés</th></tr>'
          
     for (let i=0;i<my.problems.length;i++){
          html+=
          '<tr><td>'+my.problems[i].title+'</td>'
          +'<td>'+my.problems[i].description+'</td></tr>';
     }
     html+='</table> </body> </html> ';

    response.end(html)
    });
  }
})
const port = 3000
const host = '192.168.2.103'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)
