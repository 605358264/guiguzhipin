//引入模块

const mongoose=require('mongoose')

//获取Schema

const Schema=mongoose.Schema;

//创建约束对象

const usersSchema=new Schema({
//
  
  username:{
    
    type:String,
    
    unique:true,
    
    required:true
    
  },
  
  passWord:{
    
    type:String,
    
    Required:true
  },
  
  type:{               //用户的类型
    
    type:String,
    
    Required:true
  }

 

})

//创建模型对象

const users=mongoose.model('Users',userSchema);

//暴露出去

module.exports=Users;

