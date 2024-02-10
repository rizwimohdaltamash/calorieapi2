const mongoose=require('mongoose');


const foodSchema=new mongoose.Schema({
    name:{
       type:String,
       required:true,
       trim:true
    },
    calories:{
       type:Number,
       required:true,
       
    }

})

module.exports=mongoose.model('User',foodSchema)