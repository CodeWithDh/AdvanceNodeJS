// Buffer is a temporary storage space for binary data. it is saved out of the V8 engine of JS to have imediate access of data that is saved in buffer

const {Buffer}=require("buffer");

const buf=Buffer.alloc(4)
// buf.forEach((ele)=>{
//     console.log("Element in buffer: ",ele);
// })
const username=Buffer.from("Shivam Dhingra")

console.log("Saved username is : ",username.toString())

