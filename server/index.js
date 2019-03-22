require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const app = express();
const cors = require("cors")

const {nameDate} = require('./controller/dates/createDate')

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
app.post("/api/nameDate", nameDate)


   app.listen(4000, () => {
    console.log(`Listening on ${process.env.EXPRESS_PORT}`);
   });