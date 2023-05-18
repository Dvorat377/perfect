const express=require("express");
const bodyparser=require("body-parser")
const morgan=require("morgan")

const app=express();
const port="3001";
app.use(bodyparser.json());
app.use(morgan("dev"))


app.get("/",(req,res)=>{
    
    res.status(200).send("hello 😀😀😀")
});
const UserRouter=require("./Router/UserRouter");

app.use("/userRouter",UserRouter)

app.listen(port,()=>
{
    console.log("sdfghj")
})

