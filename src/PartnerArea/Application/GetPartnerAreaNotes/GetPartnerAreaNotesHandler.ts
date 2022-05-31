import PartnerAreaNotesClient from "../PartnerAreaNotesClient";
import PartnerAreaNoteDTO from "../PartnerAreaNoteDTO";

export default class GetPartnerAreaNotesHandler {
  constructor(private notesClient: PartnerAreaNotesClient) {
  }

  async handle(): Promise<PartnerAreaNoteDTO[]> {
    return this.notesClient.getNotes();
  }
}
