import NotesCriteriaQuery from "../../Domain/NotesCriteriaQuery";
import Note from "../../Domain/Note";

export default class InMemoryNotesCriteriaQuery implements NotesCriteriaQuery {
  private notes = [
    new Note('1', 'Some text', false),
    new Note('2', 'Some text', true),
  ];

  async getNotes(onlyPublic: boolean): Promise<Note[]> {
    return onlyPublic ? this.notes.filter((n) => !n.isPrivate) : this.notes;
  }
}
