const Notes = require("../database/note");

module.exports.getNotes = (request, response) => {
  Notes.find({}, (error, notes) => {
    if (notes) {
      response.status(200).json(notes);
    }
    response.status(500);
  })
};

module.exports.createNote = (request, response) => {
  const data = request.body;
  Notes.create(data).then(note => {
    if (note) {
      response.status(200);
    }
    response.status(500);
  })
};

module.exports.updateNote = (request, response) => {
  response.status(200).json({});
};

module.exports.deleteNote = (request, response) => {
  response.status(200).json({});
};