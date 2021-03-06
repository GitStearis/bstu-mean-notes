const Notes = require("../database/note");

module.exports.getNotes = (request, response) => {
  Notes.find({}, (error, notes) => {
    if (notes) {
      return response.status(200).json(notes);
    }
    return response.status(500).json();
  });
};

module.exports.createNote = (request, response) => {
  const data = request.body;
  Notes.create(data).then(note => {
    if (note) {
      return response.status(200).json(note._id);
    }
    return response.status(500).json();
  });
};

module.exports.updateNote = (request, response) => {
  const data = request.body;
  Notes.findOneAndUpdate({ _id: data.id }, {
    $set: {
      title: data.title,
      content: data.content,
      author: data.author,
      date: data.date
    }
  }).then(note => {
    if (note) {
      return response.status(200).json();
    }
    return response.status(500).json();
  });
};

module.exports.deleteNote = (request, response) => {
  Notes.findOneAndDelete({ _id: request.params.id }).then(note => {
    if (note) {
      return response.status(200).json();
    }
    return response.status(500).json();
  });
};