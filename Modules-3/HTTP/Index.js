const http=require('http')

const server=http.createServer(function(req, res){
    console.log(req.url);
    
    res.end("the start the code  ")
})

server.listen(1212);


server.listen(1414);


HTTPS.get