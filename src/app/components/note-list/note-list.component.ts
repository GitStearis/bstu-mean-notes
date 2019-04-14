import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { Note } from '../../interfaces/note.interface';

@Component({
  selector: 'note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  notes: Note[] = [];
  isLoaded = false;

  constructor (private noteService: NoteService) {}

  ngOnInit () {
    this.noteService.getNotes().subscribe(notes => {
      this.notes = notes.map(note => NoteService.mapNoteDto(note));
      this.isLoaded = true;
    });
  }

  get leftColumn () {
    if (this.isLoaded) {
      return this.notes.filter((note, index) => index % 2 === 0);
    }
  }

  get rightColumn () {
    if (this.isLoaded) {
      return this.notes.filter((note, index) => index % 2 === 1);
    }
  }
}
