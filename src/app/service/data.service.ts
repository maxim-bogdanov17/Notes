import {Note} from "../model/Note";

export class DataService {

  private data: Note[] = [new Note({text: 'asdf', id: 10}), new Note({text: 'asdf', id: 10})];

  getData(): Note[] {
    return this.data;
  }

  addData(note: Note): void {
    this.data.push(note);
  }

  removeData(id: number): void {
    const noteIndex = this.data.findIndex(note => note.id === id);
    if (noteIndex !== -1) {
      this.data.splice(noteIndex, 1);
    }
  }
}
