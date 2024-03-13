require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose=require('mongoose')


// Middleware for CORS
app.use(cors());

// Middleware for parsing JSON data
app.use(express.json());

// Middleware for parsing data from forms
app.use(express.urlencoded({ extended: true }))

const connectDb=require('./config/db')

// Importing routes
const profileRoute = require('./routes/profile');
const companyRoute = require('./routes/company');
const authRoute = require('./routes/auth');


// Using routes
app.use('/profile', profileRoute);
app.use('/company', companyRoute);
app.use('/auth', authRoute);

const PORT = process.env.PORT || 3005;

//connect to mongodb
connectDb()

mongoose.connection.once('open',()=>{
  console.log("Connected to mongoDB")

  app.listen(PORT, () => {
    console.log(`API Server is running on port ${PORT}`);
  });
})
