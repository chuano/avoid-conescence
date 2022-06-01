import UsersAreaNotesClient from "../../Application/UsersAreaNotesClient";
import NotesApi from "../../../Notes/Infrastructure/Api/NotesApi";
import UsersAreaNoteDTO from "../../Application/UsersAreaNoteDTO";

export default class LocalUsersAreaNotesClient implements UsersAreaNotesClient {
  constructor(private api: NotesApi) {
  }

  async getNotes(): Promise<UsersAreaNoteDTO[]> {
    const notes = await this.api.getNotes(false);

    return notes.map((n) => new UsersAreaNoteDTO(n.id, n.text, n.isPrivate, n.isOpen));
  }

  async closeNote(id: string): Promise<void> {
    await this.api.closeNote(id);
  }
}
