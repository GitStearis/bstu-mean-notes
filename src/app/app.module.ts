import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { NewNoteComponent } from './components/new-note/new-note.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteComponent } from './components/note/note.component';
import { NoteService } from './services/note.service';
import { ViewService } from './services/view.service';


@NgModule({
  declarations: [
    AppComponent,
    NewNoteComponent,
    NoteComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    NoteService,
    ViewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
