import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ViewService {
  private addNoteSource = new Subject<Note>();
  private deleteNoteSource = new Subject<string>();
  private editNoteSource = new Subject<Note>();

  addNoteObservable = this.addNoteSource.asObservable();
  deleteNoteObservable = this.deleteNoteSource.asObservable();
  editNoteObservable = this.editNoteSource.asObservable();

  constructor() { }

  addNote (note: Note) {
    this.addNoteSource.next(note);
  }

  deleteNote (id: string) {
    this.deleteNoteSource.next(id);
  }

  editNote (note: Note) {
    this.editNoteSource.next(note);
  }
}
