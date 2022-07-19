const mongoose = require("mongoose");

var arrayModelSchema=mongoose.Schema({
    status:{
        type:String,
        default:"Active"
    },
    arrayOne:{
        type:[Number],
    },
    arrayTwo:{
        type:[Number]
    },
    concatedName:{
        type:[Number]
    },
    sortedName:{
        type:[Number]
    },
})

module.exports=mongoose.model("arrayModel",arrayModelSchema)
