import GetNotesQuery from "./GetNotesQuery";
import Note from "../../Domain/Note";
import NoteRepository from "../../Domain/NoteRepository";

export default class GetNotesHandler {
  constructor(private criteriaQuery: NoteRepository) {
  }

  async handle(query: GetNotesQuery): Promise<Note[]> {
    return this.criteriaQuery.getNotes(query.onlyPublic);
  }
}
