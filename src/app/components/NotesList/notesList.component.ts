import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Note} from "../../model/Note";

@Component({
  selector: 'notesList',
  templateUrl: './notesList.component.html',
  styleUrls: ['./notesList.component.scss'],
})
export class NotesListComponent {
  @Input() public notes: Note[];
  @Output() private remove = new EventEmitter<number>();

  removeNote(id: number): void {
    this.remove.emit(id);
  }
}
