import {Note} from "../model/Note";

export class DataService {

  private data: Note[] = [];

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
