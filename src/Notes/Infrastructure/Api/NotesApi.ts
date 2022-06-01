import GetNotesQuery from "../../Application/GetNotes/GetNotesQuery";
import GetNotesHandler from "../../Application/GetNotes/GetNotesHandler";
import NoteDTO from "./NoteDTO";
import InMemoryNotesCriteriaQuery from "../Persistence/InMemoryNotesCriteriaQuery";

export default class NotesApi {
  async getNotes(onlyPublic: boolean): Promise<NoteDTO[]> {
    const handler = new GetNotesHandler(new InMemoryNotesCriteriaQuery());
    const query = new GetNotesQuery(onlyPublic);
    const notes = await handler.handle(query);

    return notes.map((n) => new NoteDTO(n.id, n.text, n.isPrivate, n.isOpen));
  }
}
