import { Component, OnInit } from '@angular/core';
import Note from '../../interfaces/note.interface';

const EMPTY_NOTE = {
  Title: 'Title',
  Author: 'Author',
  Content: 'Content',
  Date: new Date()
}

@Component({
  selector: 'new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  isToggled = false;
  note: Note;

  constructor() { }

  ngOnInit() {
    this.note = EMPTY_NOTE;
  }

  toggle() {
    this.isToggled = !this.isToggled;
  }

  changeTitle (value: string) {
    this.note.Title = value;
  }

  changeAuthor (value: string) {
    this.note.Author = value;
  }

  changeContent (value: string) {
    this.note.Content = value;
  }
}
