//ServerJS --> Backend and MongoDB connection make

//Import expres package & mongoose package by require
const express = require("express");
const mongoose = require("mongoose");

//coming to server json format, so convert to js format
const bodyparser = require("body-parser");

//To run server create constant variable app
//Invoke express
const app = express();

//To reject browser security while two domain working
const cors = require("cors");

//import order routes
const orderRoutes = require('./routes/order');

//import material routes
const materialroutes = require("./routes/materials");
const lmomatroutes = require("./routes/lmomats");
const matreportroutes = require("./routes/matreports");

//middleware --> Backend routes facilates

//middleware 
app.use(bodyparser.json());
app.use(cors());

//route order middleware
app.use(orderRoutes);

//route material midleware
app.use(materialroutes);
app.use(lmomatroutes);
app.use(matreportroutes);


//server static assests if in production - for Heroku
if (process.env.NODE_ENV == 'production') { 
  //Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => { 
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}


const PORT = process.env.PORT || 8000;
const DB_URL =
  "mongodb+srv://spm:spm123@cluster0.6jhrihp.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Mongodb Successfully Connected");
  })
  .catch((err) => {
    console.log("mongodb connection Failed");
  });

//port Listen
app.listen(PORT, () => {
  console.log(`Server is Running on port No ${PORT}`);
});

module.exports = mongoose;
