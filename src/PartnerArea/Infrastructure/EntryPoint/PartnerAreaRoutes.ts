import {Request, Response, Router} from "express";
import GetPartnerAreaNotesController from "./GetPartnerAreaNotesController";
import GetPartnerAreaNotesHandler from "../../Application/GetPartnerAreaNotes/GetPartnerAreaNotesHandler";
import {LocalPartnerAreaNotesClient} from "../NotesClient/LocalPartnerAreaNotesClient";
import NotesApi from "../../../Notes/Infrastructure/Api/NotesApi";
import ClosePartnerAreaNoteController from "./ClosePartnerAreaNoteController";

export default class PartnerAreaRoutes {
  static register(): Router {
    const router = Router();

    const notesClient = new LocalPartnerAreaNotesClient(new NotesApi());

    const getPartnerAreaNotesController = new GetPartnerAreaNotesController(
      new GetPartnerAreaNotesHandler(notesClient)
    );
    router.get(
      '/partner-area/notes',
      (req: Request, res: Response) => getPartnerAreaNotesController.execute(req, res)
    );

    const closePartnerAreaNoteController = new ClosePartnerAreaNoteController();
    router.put(
      '/partner-area/notes/:id',
      (req: Request, res: Response) => closePartnerAreaNoteController.execute(req, res)
    );

    return router;
  }
}
