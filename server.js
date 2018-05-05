const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.set("views", __dirname + "/client/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
require("./server/config/routes")(app);
app.listen(8000);