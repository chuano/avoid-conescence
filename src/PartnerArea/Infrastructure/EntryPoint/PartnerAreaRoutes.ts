import {Request, Response, Router} from "express";
import GetPartnerAreaNotesController from "./GetPartnerAreaNotesController";
import GetPartnerAreaNotesHandler from "../../Application/GetPartnerAreaNotes/GetPartnerAreaNotesHandler";
import {LocalPartnerAreaNotesClient} from "../NotesClient/LocalPartnerAreaNotesClient";
import NotesApi from "../../../Notes/Infrastructure/Api/NotesApi";

export default class PartnerAreaRoutes {
  static register(): Router {
    const router = Router();

    const notesClient = new LocalPartnerAreaNotesClient(new NotesApi());
    const getNotesHandler = new GetPartnerAreaNotesHandler(notesClient)
    const getNotesController = new GetPartnerAreaNotesController(getNotesHandler)

    router.get(
      '/partner-area/notes',
      (req: Request, res: Response) => getNotesController.execute(req, res)
    );

    return router;
  }
}
