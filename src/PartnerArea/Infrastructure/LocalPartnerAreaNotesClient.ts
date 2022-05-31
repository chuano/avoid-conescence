import PartnerAreaNotesClient from "../Application/PartnerAreaNotesClient";
import NotesApi from "../../Notes/Infrastructure/NotesApi";
import PartnerAreaNoteDTO from "../Application/PartnerAreaNoteDTO";

export class LocalPartnerAreaNotesClient implements PartnerAreaNotesClient {
  constructor(private api: NotesApi) {
  }

  async getNotes(): Promise<PartnerAreaNoteDTO[]> {
    const notes = await this.api.getNotes(true);

    return notes.map((n) => new PartnerAreaNoteDTO(n.id, n.text));
  }
}
