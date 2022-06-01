import UsersAreaNotesClient from "../UsersAreaNotesClient";
import { CloseUsersAreaNoteCommand } from "./CloseUsersAreaNoteCommand";

export default class CloseUsersAreaNoteHandler {
    constructor(private notesClient: UsersAreaNotesClient) {
    }

    async handle(command: CloseUsersAreaNoteCommand): Promise<void> {
        await this.notesClient.closeNote(command.noteId);
    }
}