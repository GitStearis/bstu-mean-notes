import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note, NoteDto } from '../interfaces/note.interface';
import { environment } from '../../environments/environment';


@Injectable()
export class NoteService {
  private mulripleNotesUrl = `${environment.API_URL}/notes`;
  private singleNoteUrl = `${environment.API_URL}/note`;

  constructor(private http: HttpClient) { }

  static mapNoteDto (dto: NoteDto): Note {
    dto.date = new Date(dto.date);
    const note = {
      ...dto,
      id: dto._id
    };
    delete note._id;
    return note;
  }

  saveNote (note: Note) {
    return this.http.post(this.singleNoteUrl, note);
  }

  getNotes () {
    return this.http.get<NoteDto[]>(this.mulripleNotesUrl);
  }

  deleteNote (id: string) {
    const url = `${this.singleNoteUrl}/${id}`;
    return this.http.delete(url).subscribe();
  }
}
