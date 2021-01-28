import { Component, OnInit} from '@angular/core';
import {DataService} from "../../service/data.service";
import {Note} from "../../model/Note";

@Component({
  selector: 'notes-app',
  templateUrl: './notesApp.component.html',
  styleUrls: ['./notesApp.component.scss'],
  providers: [DataService]
})
export class NotesAppComponent implements OnInit {
  private lastId: number = 0;
  public notes: Note[] = [];
  public text: string = '';
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.notes = this.dataService.getData();
  }

  addNote(): void {
    const note = new Note({text: this.text, id: this.lastId++});
    this.dataService.addData(note);
    this.text = '';
  }

  removeNote(id: number): void {
    this.dataService.removeData(id);
  }
}
