import {Request, Response, Router} from "express";
import GetUsersAreaNotesController from "./GetUsersAreaNotesController";
import GetUsersAreaNotesHandler from "../../Application/GetUsersAreaNotes/GetUsersAreaNotesHandler";
import LocalUsersAreaNotesClient from "../NotesClient/LocalUsersAreaNotesClient";
import NotesApi from "../../../Notes/Infrastructure/Api/NotesApi";
import { CloseUsersAreaNoteController } from "./CloseUsersAreaNoteController";
import CloseUsersAreaNoteHandler from "../../Application/CloseUsersAreaNote/CloseUsersAreaNoteHandler";

export class UsersAreaRoutes {
  static register(): Router {
    const router = Router();

    const client = new LocalUsersAreaNotesClient(new NotesApi());

    const getUsersAreaNotesController = new GetUsersAreaNotesController(
      new GetUsersAreaNotesHandler(client)
    );
    router.get(
      '/users-area/notes',
      async (req: Request, res: Response) => await getUsersAreaNotesController.execute(req, res)
    )

    const closeUsersAreaNotesController = new CloseUsersAreaNoteController(
      new CloseUsersAreaNoteHandler(client)
    );
    router.put(
      '/users-area/notes/:id',
      async (req: Request, res: Response) => await closeUsersAreaNotesController.execute(req, res)
    )

    return router;
  }
}
