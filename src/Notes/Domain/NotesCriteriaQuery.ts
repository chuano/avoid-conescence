import Note from "./Note";

export default interface NotesCriteriaQuery {
  getNotes(onlyPublic: boolean): Promise<Note[]>
}
