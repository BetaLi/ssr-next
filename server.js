//There is a big problem with this code ,can not find the function in app variables.
//It`s already works

const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
    .then(()=>{
       const server = express();

       server.get('/p/:id',(req,res)=>{
           //render 函数的API
           //第一个参数表示请求req、第二个参数表示响应res、第三个表示实际的路由地址，第四个参数表示路由过去的参数
           return app.render(req,res,'/post',{title:req.params.id});
       })

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