import supertest from "supertest";
import {createApp} from "../src/app";

const server = supertest(createApp())

describe('Contexts tests', () => {
  test('Partner area shows only public notes', async () => {
    const res = await server.get('/partner-area/notes');
    expect(res.body).toEqual([
      {id: '1', text: 'Some text'}
    ]);
  });

  test('Users area shows all notes', async () => {
    const res = await server.get('/users-area/notes')
    expect(res.body).toEqual([
      {id: '1', text: 'Some text', isPrivate: false},
      {id: '2', text: 'Some text', isPrivate: true}
    ])
  })
});
