import { Component, OnInit } from '@angular/core';
import { NoteService } from './services/note.service';
import { Note } from './interfaces/note.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notes: Note[] = [];

  constructor (private noteService: NoteService) {}

  ngOnInit () {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes.map(note => NoteService.mapNoteDto(note));
    });
  }
}
