describe('Teste E2E API Cinema NestJs', () => {
  const baseUrl = 'http://localhost:3000'; // Altere para a URL onde sua API está rodando

  let movieId;
  let ticketId;

  it('POST /movies - Cria um novo filme', () => {
    cy.request('POST', `${baseUrl}/movies`, {
      title: 'Novo Filme',
      description: 'Descrição do Novo Filme',
      launchdate: '2024-11-18T12:22:32.702Z',
      showtimes: ['2024-11-18T15:00:00.000Z', '2024-11-19T18:00:00.000Z']
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('id');
    });
  });

  it('GET /movies - Obtém a lista de filmes', () => {
    cy.request('GET', `${baseUrl}/movies`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
      console.log("✅✅✅"+response.body);
      movieId = response.body[0]._id;
    });
  });

  it('PUT /movies/:id - Atualiza um filme', () => {
    cy.request('PUT', `${baseUrl}/movies/${movieId}`, {
      title: 'Filme Atualizado',
      description: 'Descrição Atualizada do Filme',
      launchdate: '2025-01-01T12:22:32.702Z',
      showtimes: ['2025-01-01T15:00:00.000Z', '2025-01-02T18:00:00.000Z']
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('GET /movies/:id - Obtém detalhes de um filme por ID', () => {
    cy.request('GET', `${baseUrl}/movies/${movieId}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('_id', movieId);
      expect(response.body.title).to.eq('Filme Atualizado');
      expect(response.body.description).to.eq('Descrição Atualizada do Filme');
    });
  });

  it('POST /tickets - Cria um novo ingresso', () => {
    cy.request('POST', `${baseUrl}/tickets`, {
      movieId: movieId,
      userId: 'user123',
      seatNumber: 1,
      price: 50,
      showtime: '2024-11-18T13:37:46.274Z'
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('_id');
      ticketId = response.body._id;
    });
  });

  it('GET /tickets - Obtém a lista de ingressos', () => {
    cy.request('GET', `${baseUrl}/tickets`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body.length).to.be.greaterThan(0);
    });
  });

  it('PUT /tickets/:id - Atualiza um ingresso', () => {
    cy.request('PUT', `${baseUrl}/tickets/${ticketId}`, {
      movieId: movieId,
      userId: 'user123',
      seatNumber: 2,
      price: 60,
      showtime: '2024-11-19T13:37:46.274Z'
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('GET /tickets/:id - Obtém detalhes de um ingresso por ID', () => {
    cy.request('GET', `${baseUrl}/tickets/${ticketId}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('_id', ticketId);
      expect(response.body.seatNumber).to.eq(2);
      expect(response.body.price).to.eq(60);
    });
  });

  it('DELETE /tickets/:id - Deleta um ingresso por ID', () => {
    cy.request('DELETE', `${baseUrl}/tickets/${ticketId}`).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('GET /tickets - Verifica que o ingresso foi deletado', () => {
    cy.request('GET', `${baseUrl}/tickets`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body).not.to.include.that.has.property('_id', ticketId);
    });
  });

  it('DELETE /movies/:id - Deleta um filme por ID', () => {
    cy.request('DELETE', `${baseUrl}/movies/${movieId}`).then((response) => {
      expect(response.status).to.eq(201);
    });
  });

  it('GET /movies - Verifica que o filme foi deletado', () => {
    cy.request('GET', `${baseUrl}/movies`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an('array');
      expect(response.body).not.to.include.that.has.property('_id', movieId);
    });
  });
});
