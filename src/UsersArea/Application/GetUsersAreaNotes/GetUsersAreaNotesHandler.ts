import UsersAreaNotesClient from "../UsersAreaNotesClient";
import UsersAreaNoteDTO from "../UsersAreaNoteDTO";

export default class GetUsersAreaNotesHandler {
  constructor(private notesClient: UsersAreaNotesClient) {
  }

  async handle(): Promise<UsersAreaNoteDTO[]> {
    return this.notesClient.getNotes();
  }
}
