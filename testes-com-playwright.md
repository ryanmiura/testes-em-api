## Testando a API do Cinema com Playwright

O Playwright é uma ferramenta de automação de testes de ponta a ponta que permite testar aplicações web em diferentes navegadores e dispositivos. Para testar a API do Cinema com o Playwright, podemos seguir os seguintes passos:

**1. Instalar as dependências:**

```
npm install --save-dev @playwright/test
```

**2. Criar um arquivo de configuração do Playwright:**

```
// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:3000',
  },
};

export default config;
```

**3. Criar os testes:**

```typescript
// tests/movies.spec.ts
import { test, expect } from '@playwright/test';

test('deve listar todos os filmes', async ({ request }) => {
  const response = await request.get('/movies');
  expect(response.status()).toBe(200);
  const movies = await response.json();
  expect(movies).toBeInstanceOf(Array);
});

// tests/tickets.spec.ts
import { test, expect } from '@playwright/test';

test('deve criar um novo ingresso', async ({ request }) => {
  const response = await request.post('/tickets', {
    data: {
      movieId: 1,
      userId: 1,
    },
  });
  expect(response.status()).toBe(201);
  const ticket = await response.json();
  expect(ticket).toHaveProperty('id');
});
```

**4. Executar os testes:**

```
npx playwright test
```

**Observações:**

* Os testes acima são apenas exemplos básicos. É importante criar testes para todas as rotas e funcionalidades da API.
* É possível utilizar o Playwright para testar a API em diferentes navegadores e dispositivos.
* O Playwright também permite realizar testes de interface do usuário, caso a API possua uma interface web.
