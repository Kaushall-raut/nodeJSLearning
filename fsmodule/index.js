const fs = require("fs");


// read 

const read=fs.readFileSync('./data.txt','utf-8')    //synchronous way

fs.readFile("./data.txt", (err, data) => {
   if (err) console.log(err.message);
  console.log(data.toString());
}); //asynchronous way

console.log(read);



//write 

fs.writeFileSync('write.txt',"hello coder")


fs.writeFile('write.txt',"hello i am a asynchronous ",(err)=>console.log(err)
)


//append 

fs.appendFile('write.txt',' function',(err)=>console.log(err))

//delete

fs.unlink('write.txt',(err)=>console.log(err))

//rename 
fs.rename('data.txt','content.txt',(err)=>console.log(err))