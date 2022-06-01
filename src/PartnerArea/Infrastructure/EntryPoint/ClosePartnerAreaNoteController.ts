import { Request, Response } from "express";

export default class ClosePartnerAreaNoteController {
    async execute(req: Request, res: Response): Promise<void> {
        res.sendStatus(401);
    }
}