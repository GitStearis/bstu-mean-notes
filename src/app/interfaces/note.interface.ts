export interface Note {
  title: string;
  content: string;
  author: string;
  date: Date;
  id?: string;
}

export interface NoteDto extends Note {
  _id: string;
}
