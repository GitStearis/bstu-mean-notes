import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Note } from '../../interfaces/note.interface';
import { DefaultNote, NoteFieldMap, EmptyNote } from '../../constants/note';
import { NoteService } from '../../services/note.service';
import { ViewService } from '../../services/view.service';


@Component({
  selector: 'new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  @ViewChild('title') title: ElementRef;
  @ViewChild('author') author: ElementRef;
  @ViewChild('content') content: ElementRef;
  isInEditMode = false;
  isToggled = false;
  note: Note;

  editorRendered = new EventEmitter();

  constructor(private noteService: NoteService,
              private viewService: ViewService) { }

  ngOnInit() {
    this.viewService.editNoteObservable.subscribe(note => this.startEditMode(note));
    this.note = DefaultNote;
  }

  get viewIsEmpty () {
    return this.title.nativeElement.value.length === 0 ||
           this.author.nativeElement.value.length === 0 ||
           this.content.nativeElement.value.length === 0;
  }

  toggle() {
    this.isToggled = !this.isToggled;
  }

  changeField (event: any) {
    const { id, value } = event.target;
    const field = NoteFieldMap.get(id);
    this.note[field] = value;
  }

  setView (note: Note) {
    this.title.nativeElement.value = note.title;
    this.author.nativeElement.value = note.author;
    this.content.nativeElement.value = note.content;
  }

  setViewToEmpty () {
    this.setView(EmptyNote);
  }

  saveNote () {
    this.setViewToEmpty();
    this.noteService.saveNote(this.note).subscribe((id: string) => {
      this.note.id = id;
      this.viewService.addNote(this.note);
      this.note = DefaultNote;
    });
  }

  startEditMode (note: Note) {
    this.isToggled = true;
    this.isInEditMode = true;
    this.setView(note);
    this.note = note;
  }

  leaveEditMode () {
    this.note = DefaultNote;
    this.setViewToEmpty();
    this.isInEditMode = false;
    this.isToggled = false;
  }

  saveEditedNote () {
    this.noteService.updateNote(this.note).subscribe(() => {
      this.leaveEditMode();
    });
  }
}
