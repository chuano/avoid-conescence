export default class Note {
  constructor(
    readonly id: string,
    readonly text: string,
    readonly isPrivate: boolean,
    private _isOpen: boolean
  ) {
  }

  close(): void {
    this._isOpen = false;
  }

  get isOpen(): boolean {
    return this._isOpen;
  }
}
