# Teste com Tailwind 4

Este é um demo que percorre o procedimento necessário para começar um projeto React usando Tailwind na versão 4.


Estes passsos para a instalação/preparação estão lá no site do tailwind:

[Tailwind CSS - Rapidly build modern websites without ever leaving your HTML.](https://tailwindcss.com/)

Clica em `Get Started` > `Framework Guides` > `Next.js` 

Ou vai direto no https://tailwindcss.com/docs/installation/framework-guides/nextjs, nele tem o passo a passo que fiz a seguir.

Install Tailwind CSS:

```jsx
npm install tailwindcss @tailwindcss/postcss postcss
```

Cria o arquivo `postcss.config.mjs` na raiz do projeto e recheia ele com:

```jsx
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
```

Cria o arquivo  `./src/app/globals.css`

```jsx
@import "tailwindcss";
```