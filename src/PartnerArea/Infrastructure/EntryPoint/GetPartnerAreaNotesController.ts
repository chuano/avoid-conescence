import GetPartnerAreaNotesHandler from "../../Application/GetPartnerAreaNotes/GetPartnerAreaNotesHandler";
import {Request, Response} from "express";

export default class GetPartnerAreaNotesController {
  constructor(private handler: GetPartnerAreaNotesHandler) {
  }

  async execute(req: Request, res: Response): Promise<void> {
    const result = await this.handler.handle();

    res.json(result);
  }
}
