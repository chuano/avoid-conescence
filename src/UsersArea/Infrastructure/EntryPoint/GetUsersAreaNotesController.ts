import GetUsersAreaNotesHandler from "../../Application/GetUsersAreaNotes/GetUsersAreaNotesHandler";
import {Request, Response} from "express";

export default class GetUsersAreaNotesController {
  constructor(private handler: GetUsersAreaNotesHandler) {
  }

  async execute(req: Request, res: Response): Promise<void> {
    const notes = await this.handler.handle();

    res.json(notes);
  }
}
