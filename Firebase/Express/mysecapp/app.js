const  express = require("express");
const app = express();
const port = 100;

app.get("/", (req,res)=>{
  res.send("hlw bro Wating!...")
});
app.get("/data", (req,res)=>{
  res.send("bro Wating data!...")
});

app.listen(port,()=>{
    console.log(`my first server port ${port}`);
})