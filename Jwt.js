const jwt =require("jsonwebtoken")
const rand=require("random-key")
const Randgenerate= rand.generate(32)
const stringrand= Randgenerate.toString();
console.log(stringrand,typeof(stringrand))

const token= jwt.sign({foo:"magoo"},stringrand)
console.log(token)