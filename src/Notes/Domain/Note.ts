export default class Note {
  constructor(
    readonly id: string,
    readonly text: string,
    readonly isPrivate: boolean,
    readonly isOpen: boolean
  ) {
  }
}
