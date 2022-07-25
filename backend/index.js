const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const dotenv = require('dotenv')
dotenv.config()
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

app.get("/", (req,res)=>{
    res.send("hello jwt");
});

app.use("/customers", require("./routes/customerRoutes"))

const PORT = 4000;
const DB_URL = process.env.DB_URI;
mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:  true
})
.then(()=>{
    console.log('DB is connected');
})
.catch((err)=>console.log('DB connection err',err));


app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});