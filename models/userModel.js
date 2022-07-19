const mongoose=require("mongoose")
const userModelSchema=mongoose.Schema({
    status:{
        type:String,
        default:"Active"
    },
    userName:{
        type:String,
    },
    password:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    firstName:{
        type:String
    },
    lastName:
    {
        type:String
    }

})