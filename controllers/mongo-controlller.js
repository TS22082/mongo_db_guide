const mongojs = require("mongojs");

const databaseUrl = "notetaker_db";
const collections = ["notes"];
const db = mongojs(databaseUrl, collections);

db.on("error", (err) => console.log({ db_error: err }));

module.exports = {
  getNotes: (req, res) => {
    db.notes.find({}, (err, data) => {
      err ? res.send(err) : res.send(data);
    });
  },

  findNote: (req, res) => {
    db.notes.findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, data) => {
      err ? res.send(err) : res.send(data);
    });
  },

  addNote: (req, res) => {
    db.notes.insert({ text: req.body.text }, (err, data) => {
      err ? res.send(err) : res.send(data);
    });
  },

  updateNote: (req, res) => {
    db.notes.update(
      { _id: mongojs.ObjectId(req.body.id) },
      { $set: { text: req.body.text } },
      (err, data) => (err ? res.send(err) : res.send(data))
    );
  },

  deleteNote: (req, res) => {
    db.notes.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, data) =>
      err ? res.send(err) : res.send(data)
    );
  },
};
