const fs = require("fs");
const path = require("path");

const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// import nanoid to produce unique id
const {nanoid} = require("nanoid");
// console.log(nanoid());

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const { notes } = require("./db/db.json");

// function to create new note
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, "./db/db.json"),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

// GET route for api
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// POST route for api
app.post("/api/notes", (req, res) => {
    // give new note random id
    req.body.id = nanoid();
    // create new note and send to `db.json`
    const note = createNewNote(req.body, notes);
    res.json(note);
});

// GET routes for html pages
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  
  app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
});
