const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")
const app = express();

app.use(bodyParser.urlencoded({extended: true})); //bodyParser setup
app.use(express.static("public"));
let items = [];

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    const day = date.getDate();
    res.render("list", {dayName: day, items: items});
})

app.post("/", (req, res) => {
    const newItem = req.body.newItem;
    items.push(newItem);
    res.redirect("/");
})

app.listen("3000", () => {
    console.log("Server live on port 3000");
})