const fs = require('fs')
const http = require('http');

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        fs.readFile('index.html', function(err, data) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
        })
    }
    if (req.url === '/about.html') {
        fs.readFile('about.html', function(err, data) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
        })
    }
    if (req.url === '/contact.html') {
        fs.readFile('contact.html', function(err, data) {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
        })
    }
    // fs.readFile('about.html', function(err, data) {
    //   res.writeHead(200, {'Content-Type': 'text/html'});
    //   res.write(data);
    //   return res.end();
    // })

    // fs.readFile('contact.html', function(err, data) {
    //   res.writeHead(200, {'Content-Type': 'text/html'});
    //   res.write(data);
    //   return res.end();
    // })

        // if (req.url === '/index.html' ) {
        //     if (err) throw err;

        //     // res.writeHead(200, {'Con?tent-Type': 'text/html'})
        //     res.write(data)
        //     res.end();
        // }
})
  
  
  server.listen(3000)
  console.log('listening on port 3000')