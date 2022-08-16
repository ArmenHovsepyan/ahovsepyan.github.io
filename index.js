
import express from "express"

import fs from "fs"
import path from "path";
let us=[];
const app=express();
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended:false}))


app.get("/",(req,res)=>{res.sendFile( path.resolve("index.html"))})
app.get("/Admin",(req,res)=>{res.sendFile( path.resolve("public/login.html"))})
app.get("/Admin.html",(req,res)=>{res.re( path.resolve("public/login.html"))})
app.post("/login",(req,res)=>{
  const{username,password} =req.body
  us.push({
    username:username, 
    pasword:password
})
    
 //alert(us.username)
 if(username==="Armen"&& password==="Armen"){
    res.redirect("/Admin.html")
 }
 else{
   
    res.redirect("/login.html")
   
    
 }
 
})

app.get("/data",(req,res)=>{
    res.sendFile(path.resolve("data.json)"))
})
app.get("/todos",(req,res)=>{
    res.sendFile(path.resolve("data.json"))})
    app.get("/karusel",(req,res)=>{
        res.sendFile(path.resolve("karusel.json"))})
    

app.post("/todos",(req,res)=>
{
   
     const t=path.resolve("data.json");
   
     fs.promises.writeFile(t,JSON.stringify(req.body,undefined,2)).then(()=>{  res.send("ameinch lava")})
 console.log(res)
   
})
app.post("/karusel",(req,res)=>
{
     console.log(req.body)
     const t=path.resolve("karusel.json");
   
     fs.promises.writeFile(t,JSON.stringify(req.body,undefined,2)).then(()=>{  res.send("ameinch lava")})
 console.log(res)
   
})

app.listen(process.env.PPRT||8000)