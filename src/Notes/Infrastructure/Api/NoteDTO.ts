export default class NoteDTO {
  constructor(
    readonly id: string, 
    readonly text: string, 
    readonly isPrivate: boolean,
    readonly isOpen: boolean,
  ) {
  }
}
