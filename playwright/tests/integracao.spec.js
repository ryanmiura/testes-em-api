// @ts-check
const { test, expect } = require('@playwright/test');

const apiUrl = 'http://localhost:3000';

const newMovie = {
  title: "interestelar",
  description: "filme de ficção astronomico",
  launchdate: "2022-10-20",
  showtimes: "2024-10-20"
};

const newTicket = {
  movieId: "interestelarticket",
  userId: "123123",
  seatNumber: 2,
  price: 10,
  showtime: "2024-11-11T21:44:06.011Z"
};


test('POST /movies -> GET /movies', async ({ request }) => {
  const response = await request.post(`${apiUrl}/movies`, { data: newMovie });
  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  const newMovieId = responseBody._id;

  const getMoviesResponse = await request.get(`${apiUrl}/movies`);
  expect(getMoviesResponse.status()).toBe(200);
  const getMoviesResponseBody = await getMoviesResponse.json();
  expect(getMoviesResponseBody).toContainEqual(expect.objectContaining({...newMovie, _id: newMovieId}));
});

test('POST /tickets -> GET /tickets', async ({ request }) => {
  const response = await request.post(`${apiUrl}/tickets`, { data: newTicket });
  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  const newTicketId = responseBody._id;

  const getTicketsResponse = await request.get(`${apiUrl}/tickets`);
  expect(getTicketsResponse.status()).toBe(200);
  const getTicketsResponseBody = await getTicketsResponse.json();
  expect(getTicketsResponseBody).toContainEqual(expect.objectContaining({ ...newTicket, _id: newTicketId }));
});

test('PUT /movies/:id -> GET /movies/:id', async ({ request }) => {
  const get1Response = await request.get(`${apiUrl}/movies`);
  expect(get1Response.status()).toBe(200);
  const get1ResponseBody = await get1Response.json();
  const movieId = get1ResponseBody[1]._id;

  const updatedMovie = { ...newMovie, title: 'Novo Título' };
  const putResponse = await request.put(`${apiUrl}/movies/${movieId}`, { data: updatedMovie });
  expect(putResponse.status()).toBe(200);


  const getResponse = await request.get(`${apiUrl}/movies/${movieId}`);
  expect(getResponse.status()).toBe(200);
  const getResponseBody = await getResponse.json();

  expect(getResponseBody).toEqual(expect.objectContaining({ ...updatedMovie, _id: movieId }));
});

test('PUT /tickets/:id -> GET /tickets/:id', async ({ request }) => {
  const postResponse = await request.post(`${apiUrl}/tickets`, { data: newTicket });
  expect(postResponse.status()).toBe(201);
  const postResponseBody = await postResponse.json();
  const ticketId = postResponseBody._id;

  const updatedTicket = { ...newTicket, price: 15 };
  const putResponse = await request.put(`${apiUrl}/tickets/${ticketId}`, { data: updatedTicket });
  expect(putResponse.status()).toBe(200);

  const getResponse = await request.get(`${apiUrl}/tickets/${ticketId}`);
  expect(getResponse.status()).toBe(200);
  const getResponseBody = await getResponse.json();
  expect(getResponseBody).toEqual(expect.objectContaining({ ...updatedTicket, _id: ticketId }));
});

test('DELETE /movies/:id -> GET /movies', async ({ request }) => {
  const get1Response = await request.get(`${apiUrl}/movies`);
  expect(get1Response.status()).toBe(200);
  const get1ResponseBody = await get1Response.json();
  const movieId = get1ResponseBody[0]._id;

  const deleteResponse = await request.delete(`${apiUrl}/movies/${movieId}`);
  expect(deleteResponse.status()).toBe(200);

  const getResponse = await request.get(`${apiUrl}/movies`);
  expect(getResponse.status()).toBe(200);
  const getResponseBody = await getResponse.json();

  expect(getResponseBody).not.toContainEqual(expect.objectContaining({ _id: movieId }));
});

test('DELETE /tickets/:id -> GET /tickets', async ({ request }) => {
  const postResponse = await request.post(`${apiUrl}/tickets`, { data: newTicket });
  expect(postResponse.status()).toBe(201);
  const postResponseBody = await postResponse.json();
  const ticketId = postResponseBody._id;

  const deleteResponse = await request.delete(`${apiUrl}/tickets/${ticketId}`);
  expect(deleteResponse.status()).toBe(200);

  const getResponse = await request.get(`${apiUrl}/tickets`);
  expect(getResponse.status()).toBe(200);
  const getResponseBody = await getResponse.json();
  expect(getResponseBody).not.toContainEqual(expect.objectContaining({ _id: ticketId }));
});
