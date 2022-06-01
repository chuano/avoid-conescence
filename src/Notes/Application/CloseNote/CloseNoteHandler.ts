import NoteRepository from "../../Domain/NoteRepository";
import CloseNoteCommand from "./CloseNoteCommand";

export class CloseNoteHandler {
    constructor(private notesRepository: NoteRepository) {}

    async handle(command: CloseNoteCommand): Promise<void> {
        const note = await this.notesRepository.find(command.noteId);
        note.close();
    }
}