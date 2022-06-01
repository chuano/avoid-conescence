import {Request, Response, Router} from "express";
import GetUsersAreaNotesController from "./GetUsersAreaNotesController";
import GetUsersAreaNotesHandler from "../../Application/GetUsersAreaNotes/GetUsersAreaNotesHandler";
import LocalUsersAreaNotesClient from "../NotesClient/LocalUsersAreaNotesClient";
import NotesApi from "../../../Notes/Infrastructure/Api/NotesApi";

export class UsersAreaRoutes {
  static register(): Router {
    const router = Router();
    const client = new LocalUsersAreaNotesClient(new NotesApi());
    const handler = new GetUsersAreaNotesHandler(client);

    const getUsersAreaNotesController = new GetUsersAreaNotesController(handler);
    router.get(
      '/users-area/notes',
      async (req: Request, res: Response) => getUsersAreaNotesController.execute(req, res)
    )

    return router;
  }
}
