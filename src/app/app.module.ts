import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { NewNoteComponent } from './components/new-note/new-note.component';


@NgModule({
  declarations: [
    AppComponent,
    NewNoteComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
