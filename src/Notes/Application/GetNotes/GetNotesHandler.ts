import GetNotesQuery from "./GetNotesQuery";
import Note from "../../Domain/Note";
import NotesCriteriaQuery from "../../Domain/NotesCriteriaQuery";

export default class GetNotesHandler {
  constructor(private criteriaQuery: NotesCriteriaQuery) {
  }

  async handle(query: GetNotesQuery): Promise<Note[]> {
    return this.criteriaQuery.getNotes(query.onlyPublic);
  }
}
