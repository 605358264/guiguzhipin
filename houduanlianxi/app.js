//引入express
const express=require('express')


const router=require('./router')

//创建app对象
const app=express();
//应用路由器

app.use(router);


app.listen(4000,err=>{
  
  if(!err)console.log('服务器启动成功了');
    else console.log(err)
})