
const {data}=require("../Users");

const express=require("express")

const validFunc=require('./validfunc')

//יצוא פוקציות
module.exports={


  //getAll
    getuser:(req,res)=>{
res.status(200).send(data)
       
    },

//getuserById
       getuserById:(req,res)=>{
       let id=req.params.id
let data1=data.find(a=>a.id==id)
        res.status(200).send(data1)
        
     },

//Update
     Update:(req,res)=>{
      const userIndex = data.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        data[userIndex].id = id;
        data[userIndex].name = name;
        data[userIndex].phon = phon;
        data[userIndex].email = email;
       
        return data[userIndex];
      } else {
        return null;
      }

      data[req.params.id]=req.body
     
        res.status(200).send(data2[req.params.id])
     },


//AddUser
    

    AddUser: (req, res) => {
      
      
      if(validFunc.validphone(req.body.phon)===false)

            res.status(404).send("Invalide phon");

      if(validFunc.validemail(req.body.email)===false){

      res.status(404).send("Invalide email")
      }

      else{

       data.push(req.body) 
       res.status(200).send(data)
      }
    },



     //DeleteUser
     DeleteUser:(req,res)=>{
      data.splice((req.params.id-1),1)
        res.status(200).send(data)
     }

}


//בדיקת תקינות למייל

// let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

// let testEmails = ["notanemail.com", "workingexample@email.com", "another_working@somethingelse.org", "notworking@1.com"];

// testEmails.forEach((address) => {
//     console.log(regex.test(address))
// });