import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ViewService } from '../../services/view.service';
import { NoteService } from '../../services/note.service';
import { Note } from '../../interfaces/note.interface';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() isPreview = false;
  @Input() note: Note;
  isHovered = false;

  constructor (private viewService: ViewService,
               private noteService: NoteService) {}

  ngOnInit () {}

  get title () {
    return this.note.title;
  }

  get author () {
    return this.note.author;
  }

  get date () {
    return this.note.date.toISOString().substring(0, 10);
  }

  get content () {
    return this.note.content;
  }

  get areButtonsShown () {
    return this.isHovered && !this.isPreview;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.isHovered = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.isHovered = false;
  }

  deleteNote () {
    this.viewService.deleteNote(this.note.id);
    this.noteService.deleteNote(this.note.id);
  }

  editNote () {
    this.viewService.editNote(this.note);
  }
}
