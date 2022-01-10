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

//set up express session
const sess = {
    secret: "above meat chain",
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

//define server
const app = express();
const PORT = process.env.PORT || 3001;

//express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sess));
app.use("/", controller);

//start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
});
