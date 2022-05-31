import UsersAreaNoteDTO from "./UsersAreaNoteDTO";

export default interface UsersAreaNotesClient {
  getNotes(): Promise<UsersAreaNoteDTO[]>
}
