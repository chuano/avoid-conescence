import supertest from "supertest";
import {createApp} from "../src/app";

const server = supertest(createApp())

describe('Contexts tests', () => {
  describe('List notes', () => {
    test('Partner area shows only public notes', async () => {
      const res = await server.get('/partner-area/notes');
      expect(res.body).toEqual([
        {id: '1', text: 'Some text'}
      ]);
    });
  
    test('Users area shows all notes', async () => {
      const res = await server.get('/users-area/notes');
      expect(res.body).toEqual([
        {id: '1', text: 'Some text', isPrivate: false, isOpen: true},
        {id: '2', text: 'Some text', isPrivate: true, isOpen: true}
      ]);
    });
  })

  describe('Close note', () => {
    test('Partner cannot close note', async () => {
      const res = await server.put('/partner-area/notes/1');
      expect(res.status).toEqual(401);
    });
  
    test('Users area shows all notes', async () => {
      const res = await server.put('/users-area/notes/1');
      expect(res.status).toEqual(200);
    });
  })
});
