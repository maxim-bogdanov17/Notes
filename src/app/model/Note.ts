export class Note {
  public completed: boolean = false;
  public text: string;
  public id: number;

  constructor(config: {text: string, id: number}){
    this.text = config.text;
    this.id = config.id;
  }
}
