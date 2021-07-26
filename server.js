//Modules
const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');
var bodyParser = require('body-parser')


//config
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static(__dirname + '/public/'));
app.use(bodyParser.urlencoded({
  extended: true
}))




// app.use("/css", express.static(__dirname + "/css"))
// app.use("/images", express.static(__dirname + "/images"))
// app.use("/fonts", express.static(__dirname + "/fonts"))
// app.use("/JS", express.static(__dirname + "/JS"))


//routes
//home
app.route("/")
  .get(function(req, res) {
    res.render("index")
  })
//tournament
app.use(require('./Routes/tournament'));
//admin
app.use(require('./Routes/admin'));
//solodelete
app.use(require("./Routes/solodelete"));
//duodelete
app.use(require("./Routes/duodelete"));
//squaddelete
app.use(require("./Routes/squaddelete"));
//admin finish
//solo
app.use(require("./Routes/solo"));
//duo
app.use(require("./Routes/duo"));
//squad
app.use(require("./Routes/squad"));


app.listen(process.env.PORT || 3000, function(err) {
  if (err) {
    console.log(err)
  } else {
    console.log("Listening on Port 3000")
  }
})
