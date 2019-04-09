export const DefaultNote = {
  Title: 'Title',
  Author: 'Author',
  Content: 'Content',
  Date: new Date()
};

export const NoteIds = {
  title: 'title',
  author: 'author',
  content: 'content'
};

export const NoteFields = {
  title: 'Title',
  author: 'Author',
  content: 'Content'
};

export const NoteFieldMap = new Map<string, string>([
  [ NoteIds.title, NoteFields.title ],
  [ NoteIds.author, NoteFields.author ],
  [ NoteIds.content, NoteFields.content ],
]);
