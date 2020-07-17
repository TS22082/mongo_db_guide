const router = require("express").Router();
const {
  getNotes,
  addNote,
  findNote,
  updateNote,
  deleteNote,
} = require("../controllers/mongo-controlller");

router.get("/notes", getNotes);

router.get("/notes/find/:id", findNote);

router.post("/notes", addNote);

router.patch("/notes", updateNote);

router.delete("/notes/:id", deleteNote);

module.exports = router;
