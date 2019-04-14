export const DefaultNote = {
  title: 'Title',
  author: 'Author',
  content: 'Content',
  date: new Date()
};

export const NoteIds = {
  title: 'title-input',
  author: 'author-input',
  content: 'content-input'
};

export const NoteFields = {
  title: 'title',
  author: 'author',
  content: 'content'
};

export const NoteFieldMap = new Map<string, string>([
  [ NoteIds.title, NoteFields.title ],
  [ NoteIds.author, NoteFields.author ],
  [ NoteIds.content, NoteFields.content ],
]);
