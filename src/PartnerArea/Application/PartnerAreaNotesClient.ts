import PartnerAreaNoteDTO from "./PartnerAreaNoteDTO";

export default interface PartnerAreaNotesClient {
  getNotes(): Promise<PartnerAreaNoteDTO[]>;
}
