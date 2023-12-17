const express = require('express');
const app = express();
const cors = require('cors');


// Middleware for CORS
app.use(cors());

// Middleware for parsing JSON data
app.use(express.json());

// Middleware for parsing data from forms
app.use(express.urlencoded({ extended: true }))

// Importing routes
const profileRoute = require('./routes/profile');
const companyRoute = require('./routes/company');


// Using routes
app.use('/profile', profileRoute);
app.use('/company', companyRoute);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`API Server is running on port ${PORT}`);
});