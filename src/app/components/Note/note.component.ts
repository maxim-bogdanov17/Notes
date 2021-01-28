import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Note} from "../../model/Note";

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent {
  @Input() public note: Note;
  @Output() private remove = new EventEmitter<number>();
  public isEditing: boolean = false;

  onRemove(): void {
    this.remove.emit(this.note.id);
  }

  toggleMode(): void {
    // нет смысла сохранять заметку в которой ничего нет
    if (this.isEditing && !this.note.text) {
      this.onRemove();
    }
    this.isEditing = !this.isEditing;
  }
}
