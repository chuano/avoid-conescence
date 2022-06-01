import { Request, Response } from "express";
import { CloseUsersAreaNoteCommand } from "../../Application/CloseUsersAreaNote/CloseUsersAreaNoteCommand";
import CloseUsersAreaNoteHandler from "../../Application/CloseUsersAreaNote/CloseUsersAreaNoteHandler";

export class CloseUsersAreaNoteController {
    constructor(private handler: CloseUsersAreaNoteHandler) {
    }

    async execute(req: Request, res: Response): Promise<void> {
        const command = new CloseUsersAreaNoteCommand(req.params.id);
        await this.handler.handle(command);

        res.status(200).json();
    }
}