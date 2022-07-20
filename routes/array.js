const express= require("express");
const arrayModel = require("../models/arrayModel");
const stringModel= require('../models/stringModel');
const studentModel = require("../models/studentModel");

let router = express()


router.post('/array/sort',async(req,res)=>
{
    try{

// const array=[24,54,31,45,31];
// let array1 =[32,45,43.67,78];

var {array,array1}= req.body
var ConArray= array.concat(array1);
var storage = ConArray;

var arrayData= new arrayModel

arrayData.arrayOne=array
arrayData.arrayTwo=array1
arrayData.concatedName=ConArray



for(let i=0;i<ConArray.length; i++){
    for(let j=0; j<ConArray.length; j++){
        if(ConArray[i]>=ConArray[j]){
            temp=ConArray[i];
            ConArray[i]=ConArray[j];
            ConArray[j]=temp;
        }

    }
    
}
arrayData.sortedName=ConArray;
await arrayData.save();


// console.log(array);

// let num = array[1]

// if(num==45){
//     console.log("Hurray, we got this!!")
// }else{
//     console.log("You suck!!!!")
// }

// const ubuntuArray=["Arch","Gnome","Gnome","KDE","Plasma","Canonical","Linux",1,2,1]
// console.log(ubuntuArray)

// if(ubuntuArray[1]==ubuntuArray[2]){
//     console.log("You got this")
//     if(ubuntuArray[6]===ubuntuArray[8]){
//         console.log("You got this in triple")
//     }else{
//         console.log("You fail")
//     }
// }else{
//     console.log("You suck again!!")
// }

res.status(200).json({
    status:true,
    data:ConArray
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

// router.post("/array/paragraph", async(req,res)=>{
//     var {para} = req.body

//     var data= new stringModel()
//     data.data2=para

//     var array=para.split(" ")

   
//     await data.save()

//     // for (let i=0;i<array.length;i++){
//     //     j=i-1;
//     //     while(j>=0&&temp.length>array[j].length){
//     //         array[j+1]=array[j];
//     //         j--;
            
//     //     }
//     //     array[j+1]=temp
       
//     // // }

//     // res.status(200).json({
//     //     status:true,
//     //     data:"The save is done",

//     //  } )}})})

router.post("/test/student",async(req,res)=>{
    try{
        
    var{AdmissionNumber,Name,Department,Semester,Phone,DateOfBirth}= req.body
    if(AdmissionNumber==undefined||null||typeof(AdmissionNumber)!=="string"){
        res.status(200).json({
            status:false,
            data:"Error Occured at Admission Number"
        })
        return;
    }
    if(Name==undefined||null||typeof(Name)!=="string"){
        res.status(200).json({
            status:false,
            data:"Error Occured at Name"+typeof(Name)
        })
        return;
    }
    if(Department==undefined||null||typeof(Department)!=="string"){
        res.status(200).json({
            status:false,
            data:"Error Occured at Department"+typeof(Department)
        })
        return;
    }
    if(Semester==undefined||null||typeof(Semester)!=="string"){
        res.status(200).json({
            status:true,
            data:"Error Occured at Semester"+typeof(Semester)
        })
        return;
    }
    if(Phone==undefined||null||typeof(Phone)!=="number"){
        res.status(200).json({
            status:false,
            data:"Error Occured at Phone"+typeof(Phone)
        })
        return;
    }
    if(DateOfBirth==undefined||null||typeof(DateOfBirth)!=="string"){
        res.status(200).json({
            status:false,
            data:("Error Occured at Date of Birth"+typeof(DateOfBirth))
        })
        return;
    }
    var studentData= new studentModel()
    studentData.admissionNumber=AdmissionNumber;
    studentData.name=Name;
    studentData.department=Department;
    studentData.semester=Semester;
    studentData.phone=Phone;
    studentData.dateOfBirth=DateOfBirth;
    await studentData.save()
    res.status(200).json({
        status:true,
        data:("Data Saved"+AdmissionNumber)
    })
    }catch(e){
        console.log(e);
    }
})

router.get('/get/data', async(req,res)=>{
    try{
        var data=await studentModel.findOne({_id:"62d7ea4ee5217c1ce18fd42f"})
        if (data!==null||undefined){
            console.log(data)
            console.log(data.phone)
            data.phone=4516514115
            await data.save();
            console.log(data);
            res.status(200).json({
                status:"true",
                output:data
            })
        }else{
            res.status(200).json({
                status:"false",
                output:data
            })
            return;
        }
       
        res.status(200).json({
            status:"true",
            output: data
        })}catch(e){
            console.log(e)
        }
        return;
    });


module.exports= router;