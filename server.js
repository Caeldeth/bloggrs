// add express
const express = require("express");
// add file path as variable
const path = require("path");
// add controllers as variable
const controller = require("./controllers");
// add handlebars
const exphbs = require("express-handlebars");
// switch handlebars extension to hbs
app.engine('hbs', exhpbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');