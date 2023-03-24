const express=require("express")
const app=express();
const Router=require("./Hello.js")
app.use(Router)

app.listen(3010,()=>{
console.log("listening on port 3010")
})