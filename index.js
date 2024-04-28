const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
require('dotenv').config();


//Middlewares
app.use(cors());
app.use(express.json());


app.get('/', async(req, res)=>{
    res.send("Express server is running");
})

app.listen(port, ()=>{
    console.log("server is running on", port);
})