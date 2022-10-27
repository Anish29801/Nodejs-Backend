const http = require('http');
const fs = require('fs');

const Server=http.createServer((req,res)=>{
    console.log('Hello From Server');
    let path = './HTML Docs/';
    console.log(req.url);
    // Routing System
    switch(req.url){
        case '/':
            path=path+ 'docs1.html';
            break;
        default:
            path=path+ '404.html';
    }
    res.setHeader('Content-Type','text/html');
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err.message);
        }
        else{
            res.write(data);
        }
        res.end();
    })

})

Server.listen(3000,"localhost",()=>{
    console.log("Listening");
})
