const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const stuffRouter = require("./routes/stuff");
const userRouter = require("./routes/user");


mongoose.connect('mongodb+srv://lazybenmansour:xxxxxx@cluster0.untxlgf.mongodb.net/<dbname>',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/api/stuff' , stuffRouter);
app.use('/api/auth' , userRouter);


module.exports = app;
