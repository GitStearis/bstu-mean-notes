import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note, NoteDto } from '../interfaces/note.interface';
import { environment } from '../../environments/environment';


@Injectable()
export class NoteService {

  constructor(private http: HttpClient) { }

  static mapNoteDto (dto: NoteDto): Note {
    const note = {
      ...dto,
      id: dto._id
    };
    delete note._id;
    return note;
  }

  saveNote (note: Note) {
    const url = `${environment.API_URL}/note`;
    return this.http.post(url, note).subscribe();
  }

  getNotes () {
    const url = `${environment.API_URL}/notes`;
    return this.http.get<NoteDto[]>(url);
  }
}
