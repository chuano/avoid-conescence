import Note from "./Note";

export default interface NoteRepository {
  getNotes(onlyPublic: boolean): Promise<Note[]>

  find(id: string): Promise<Note>
}
