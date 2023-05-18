 const express=require("express");

 const Router=express.Router();

 const {getuser,
    getuserById,
    AddUser,
    DeleteUser,
    Update


}=require("./PublicRouter")
 

 Router.get("/get",getuser)
 Router.get("/getuserById/:id",getuserById)
 Router.post("/AddUser",AddUser)
 Router.delete("/DeleteUser/:id",DeleteUser)
 Router.patch("/Update",Update)

 module.exports=Router;