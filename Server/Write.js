const fs = require('fs');

 //Text Response
 res.setHeader('Content-Type','text/plain');
 res.write("Hello Broswer");
 res.end(); 

 //HTML Response
 res.setHeader('Content-Type','text/html');
 res.write("<i>Hello Broswer</i>");

 res.end();

// Reading a HTML file

res.setHeader('Content-Type','text/html');
    fs.readFile('../HTML Docs/docs1.html',(err,data)=>{
        if(err){
            console.log(err.message);
        }
        else{
            res.write(data);
        }
        res.end();
    })