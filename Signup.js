const fs = require("fs")
let data= {
  username:req.body.username,
  email:req.body.email,
  password:req.body.p
}
fs.writeFile("./Fs.json",data,(err)=>{
  console.log(err)
})