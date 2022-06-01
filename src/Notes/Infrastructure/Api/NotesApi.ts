import GetNotesQuery from "../../Application/GetNotes/GetNotesQuery";
import GetNotesHandler from "../../Application/GetNotes/GetNotesHandler";
import NoteDTO from "./NoteDTO";
import InMemoryNoteRepository from "../Persistence/InMemoryNoteRepository";
import { CloseNoteHandler } from "../../Application/CloseNote/CloseNoteHandler";
import CloseNoteCommand from "../../Application/CloseNote/CloseNoteCommand";

export default class NotesApi {
  async getNotes(onlyPublic: boolean): Promise<NoteDTO[]> {
    const query = new GetNotesQuery(onlyPublic);
    const handler = new GetNotesHandler(new InMemoryNoteRepository());
    
    const notes = await handler.handle(query);

    return notes.map((n) => new NoteDTO(n.id, n.text, n.isPrivate, n.isOpen));
  }

  async closeNote(noteId: string): Promise<void> {
    const command = new CloseNoteCommand(noteId);
    const handler = new CloseNoteHandler(new InMemoryNoteRepository());
    
    await handler.handle(command);
  }
}
