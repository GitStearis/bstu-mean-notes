import { Injectable } from '@angular/core';
import { Note } from '../interfaces/note.interface';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ViewService {
  private addNoteSource = new Subject<Note>();
  private deleteNoteSource = new Subject<string>();

  addNoteObservable = this.addNoteSource.asObservable();
  deleteNoteObservable = this.deleteNoteSource.asObservable();

  constructor() { }

  addNote (note: Note) {
    this.addNoteSource.next(note);
  }

  deleteNote (id: string) {
    this.deleteNoteSource.next(id);
  }
}
