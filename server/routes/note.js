const express = require("express");

const router = express.Router();

const {
  getNotes,
  createNote,
  updateNote,
  deleteNote
} = require("../controllers/note");

router.get("/notes", getNotes);

router.post("/note", createNote);

router.put("/note", updateNote);

router.delete("/note/:id", deleteNote);

module.exports = router;