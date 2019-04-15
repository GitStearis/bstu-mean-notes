export const DefaultNote = {
  title: 'Lorem Ipsum',
  author: 'Author',
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Proin id eros eget nibh aliquam tristique. Etiam sed interdum arcu, sed consequat justo.
            Suspendisse condimentum gravida feugiat. Nam a luctus justo, vitae facilisis dolor.
            Phasellus fringilla, diam id fringilla hendrerit, felis enim tincidunt ligula, id porta ligula massa ut dolor.
            Nulla suscipit metus in nunc cursus varius.`,
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
