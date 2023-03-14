const jwt =require("jsonwebtoken")
const rand=require("random-key")
const Randgenerate= rand.generate(32)
const stringrand= Randgenerate.toString();
console.log(stringrand,typeof(stringrand))

const Secret_key= "mysecret"
const payload = {
  userid:"1",
  user:"sandep", 
  email:"dave17807@gmail.com ", 
  password:" required"
}
const token= jwt.sign(payload,stringrand)
console.log(token)