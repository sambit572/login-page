const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Listing=require("./database/listings.js");
const path=require("path");

const MONGO_URL="mongodb://127.0.0.1:27017/login";

main().then(()=>{
    console.log("connected to db");
}).catch(err=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_URL);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/",(req,res)=>{
    res.send("project started");
})

app.get("/listings/new",(req,res)=>{
    res.render("listings/show");  
})

app.post("/login",async(req,res)=>{
    let {yourname,email,age,country}=req.body; 
})

app.get("/login",async(req,res)=>{
     let sampleListing=new Listing({
       name:"sambit",
       email:"sambit.bal0@gmail.com",
       age:35,
       country:"india"
     });
     await sampleListing.save();
     console.log("sample was saved");
     res.send("successful testing");
 });

app.listen(8080,()=>{
    console.log("app is listening on port 8080");
});