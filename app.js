const express = require("express");
const path = require("path");
const app = express();
const port = 3030;

app.use(express.static("public"));
app.listen(port, console.log("server running in http://localhost:" + port));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/views/index.html")));
app.get("/contact", (req, res) => res.sendFile(path.join(__dirname, "./views/contact.html")));
app.get("/music", (req, res) => res.sendFile(path.join(__dirname, "./views/music.html")));
app.get("/about", (req, res) => res.sendFile(path.join(__dirname, "./views/about.html")));


