var express = require("express")
var app = express()
var PORT = process.env.PORT || 3000;

var id = { name: "Maciej", surname: "Piekarski", class: "3I2", group: "a" }

app.get("/", function (req, res) {
    res.send("<h2 style='color: blue; font-family: arial; text-align: center; margin-top: 20px;'>My app!</h2>")
})

app.get("/data", function (req, res) {
    res.send(id)
})

app.listen(PORT, function () {
    console.log("Start serwera na porcie: " + PORT)
})
