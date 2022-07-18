const express= require("express")
const stringModel= require('../models/stringModel')

let router = express()


router.post('/array/sort',async(req,res)=>
{
    try{

// const array=[24,54,31,45,31];
// let array1 =[32,45,43.67,78];

var {array,array1}= req.body
var conArray= array.concat(array1);
var storage = conArray;

for(let i=0;i<array.length; i++){
    for(let j=0; j<array.length; j++){
        if(array[i]>=array[j]){
            temp=array[i];
            array[i]=array[j];
            array[j]=temp;
        }

    }
    
}
// console.log(array);

let num = array[1]

if(num==45){
    console.log("Hurray, we got this!!")
}else{
    console.log("You suck!!!!")
}

const ubuntuArray=["Arch","Gnome","Gnome","KDE","Plasma","Canonical","Linux",1,2,1]
console.log(ubuntuArray)

if(ubuntuArray[1]==ubuntuArray[2]){
    console.log("You got this")
    if(ubuntuArray[6]===ubuntuArray[8]){
        console.log("You got this in triple")
    }else{
        console.log("You fail")
    }
}else{
    console.log("You suck again!!")
}

res.status(200).json({
    status:true,
    data:array
})

return;

}catch(e){
    console.log("Error detected")
    console.log(e);
}
});


router.post('/array/flower',async(req,res)=>{
    try{
        var {a}= req.body
        var b= a.split(' ')
        console.log(b)
        res.status(200).json({
            status:true,
            data:b
        })
    }
catch(e){
console.log(e)
}})

router.post("/array/paragraph", async(req,res)=>{
    var {para} = req.body

    var data= new stringModel()
    data.data2=para

    var array=para.split(" ")

   
    await data.save()

    for (let i=0;i<array.length;i++){
        j=i-1;
        while(j>=0&&temp.length>array[j].length){
            array[j+1]=array[j];
            j--;
            
        }
        array[j+1]=temp
       
    // }

    res.status(200).json({
        status:true,
        data:"The save is done",

     } )})

module.exports= router;