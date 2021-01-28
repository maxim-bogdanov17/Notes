import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import {NotesListComponent} from "./components/NotesList/notesList.component";
import {NoteComponent} from "./components/Note/note.component";
import {NotesAppComponent} from "./components/NotesApp/notesApp.component";

@NgModule({
  declarations: [
    AppComponent, NotesListComponent, NoteComponent, NotesAppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
