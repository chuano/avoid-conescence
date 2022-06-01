import NoteRepository from "../../Domain/NoteRepository";
import Note from "../../Domain/Note";

export default class InMemoryNoteRepository implements NoteRepository {
  private notes = [
    new Note('1', 'Some text', false, true),
    new Note('2', 'Some text', true, true),
  ];

  async getNotes(onlyPublic: boolean): Promise<Note[]> {
    return onlyPublic ? this.notes.filter((n) => !n.isPrivate) : this.notes;
  }

  async find(id: string): Promise<Note> {
    const note = this.notes.find((n) => n.id === id);

    if (!note) {
      throw new Error('Note not found');
    }

    return note;
  }
}
