const express = require('express')
const cors = require('cors')
require("dotenv").config();
const app = express()
const port = process.env.PORT || 3000 ;

// middleware-----
app.use(cors());
app.use(express.json());

app.get('/' , (req, res) => {
    res.send('Welcome server from ema john simple')
})

app.listen(port, ()=> {
    console.log(`listening on emaJohn ${port}`)
})