import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Note from '../../interfaces/note.interface';
import { DefaultNote, NoteFieldMap } from '../../constants/note';


@Component({
  selector: 'new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  @ViewChild('title') title: ElementRef;
  @ViewChild('author') author: ElementRef;
  @ViewChild('content') content: ElementRef;
  isToggled = false;
  note: Note;

  constructor() { }

  ngOnInit() {
    this.note = DefaultNote;
  }

  toggle() {
    this.isToggled = !this.isToggled;
  }

  changeField (event: any) {
    const { id, value } = event.target;
    const field = NoteFieldMap.get(id);
    this.note[field] = value;
  }

  saveNote () {
    this.title.nativeElement.value = '';
    this.author.nativeElement.value = '';
    this.content.nativeElement.value = '';
    this.note = DefaultNote;
  }
}
