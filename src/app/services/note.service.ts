import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Note from '../interfaces/note.interface';
import { environment } from '../../environments/environment';


@Injectable()
export class NoteService {

  constructor(private http: HttpClient) { }

  saveNote (note: Note) {
    const url = `${environment.API_URL}/note`;
    return this.http.post(url, note).subscribe(data => {
      console.log(data);
    });
  }
}
