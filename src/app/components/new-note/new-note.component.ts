import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  isToggled = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isToggled = !this.isToggled;
  }

}
