var express = require("express")
var app = express()
var PORT = process.env.PORT || 3000;

var id = { imie: "Maciej", nazwisko: "Piekarski", klasa: "3I2", grupa: "a" }

app.get("/", function (req, res) {
    res.send("<h1 style='color: blue; font-family: arial; text-align: center; margin-top: 20px;'>My app!</h1>")
})

app.get("/data", function (req, res) {
    res.send(id)
})

app.listen(PORT, function () {
    console.log("Start serwera na porcie: " + PORT)
})
