// add express
const express = require("express");
// add file path as variable
const path = require("path");
// add controllers as variable
const controller = require("./controllers");
// add handlebars
const exphbs = require("express-handlebars");
// switch handlebars extension to hbs
app.engine('hbs', exphbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');
// add sequelize
const sequelize = require("./config/connection");
// add express session
const session = require("express-session");
// add sequelize session store
const SequelizeStore = require("connect-session-sequelize")(session.Store);