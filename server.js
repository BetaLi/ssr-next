//There is a big problem with this code ,can not find the function in app variables.

const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().than(()=>{
       const server = express();
       server.get('*',(req,res)=>{
           return handle(req,res);
       });

       server.listen(3000,(err)=>{
           if(err) throw err;
           console.log(">Ready to http://localhost:3000");
       })
    }).catch(ex=>{
        console.error(ex.stack);
        process.exit(1);
});