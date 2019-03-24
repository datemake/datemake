require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const app = express();
const cors = require("cors")

const {createDate, getMatchingActivities, getPhotos, getMatchingFood, getMatchingMemory, createDateActivity, createDateFood, createDateMemory} = require('./controller/dates/createDate')
const {getProfile,completedDates,savedDates} = require('./controller/profile')

app.use(json());
app.use(cors())

app.use(
 session({
   secret: process.env.SECRET,
   resave: true,
   saveUninitialized: false,
   cookie: {
     maxAge: 1000 * 60 * 60 * 24 * 7
   }
 })
);

massive(process.env.CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log("Database connected");
   });



//form endpoints
// app.post('/api/nameDate', nameDate)
app.post('/api/getMatchingActivites', getMatchingActivities)
app.post('/api/getSpecificActivity', getPhotos)
app.post('/api/getMatchingFood', getMatchingFood)
app.post('/api/getSpecificFood', getPhotos)
app.post('/api/getMatchingMemory', getMatchingMemory)
app.post('/api/getSpecificMemory', getPhotos)
app.post('/api/createDate', createDate)
app.post('/api/createDateActivity', createDateActivity)
app.post('/api/createDateFood', createDateFood)
app.post('/api/createDateMemory', createDateMemory)

//profile endpoints
app.get("/api/profile", getProfile)

//completed/saved dates
app.get('/api/completedDates',completedDates)
app.get('/api/completedDates',savedDates)


   app.listen(4000, () => {
    console.log(`Listening on ${process.env.EXPRESS_PORT}`);
   });