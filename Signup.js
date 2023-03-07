const fs = require("fs")
const bodyParser=require("body-parser")
const jsonString = bodyParser.parse(req.body)
let data= {
  username:jsonString.username,
  email:jsonString.email,
  password:jsonString.p
}

const fsm = fs.writeFile("./Fs.json",data,(err)=>{
  console.log(err)
})
module.exports= fsm;