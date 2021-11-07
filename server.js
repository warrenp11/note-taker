const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;

const app = express();

// middlewear
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const notes = require("./db/db.json");

// GET routes for html pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// GET route for api
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// POST route for api
app.post("/api/notes", (req, res) => {
    res.json(req.body);
    console.log(req.body);
    // create new note and send to `db.json`
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
});
