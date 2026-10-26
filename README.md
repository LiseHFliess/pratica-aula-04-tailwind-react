# Component Board — React + Tailwind CSS

Board de página única com **10 componentes de interface** construídos em React e
Tailwind CSS v4, mais **9 laboratórios de Tailwind** em HTML puro. Os componentes
são estáticos: recebem dados por props, não usam estado e são reaproveitados entre
as seções.

## Stack

- **React 19** + **Vite 7**
- **Tailwind CSS v4** (plugin `@tailwindcss/vite`, sem `tailwind.config.js`)
- Tokens de tema em `@theme` (`src/tailwind.css`) e dark mode pela classe `.dark`
- Sem bibliotecas de UI, ícones ou gráficos

## Como rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de produção em dist/
npm run preview  # serve o build
```

> Node 20.19+ (o Vite 7 exige essa versão mínima).

Com o dev server no ar:

- **Board** (os 10 componentes): <http://localhost:5173/>
- **Labs de Tailwind** (9 páginas): <http://localhost:5173/tailwind-play/>

## Conteúdo

**Componentes** (`src/board/`)

1. Button system — um componente, 4 variantes e 3 tamanhos
2. Badge + Avatar
3. Profile card
4. Product card
5. Login form
6. KPI card
7. Pricing card
8. Alert
9. Navbar responsiva
10. Mini dashboard com dark mode

**Laboratórios** (`tailwind-play/`): button e spacing, product grid, theme lab,
login form, pricing cards, settings toggle, FAQ accordion, dashboard summary e
theme toggle — cada um como página HTML executável. O código, a explicação das
classes e as respostas dos checkpoints estão em
[`TAILWIND_PLAY.md`](./TAILWIND_PLAY.md).

## Estrutura

```
tailwind-play/                 # 9 labs em HTML puro + índice + play.css
src/
├── index.jsx                  # entrada: renderiza o board
├── tailwind.css               # @theme, tokens e variante dark
├── board/
│   ├── BoardApp.jsx           # shell da página e navegação
│   ├── lib/cn.js              # helper de classes condicionais
│   ├── ui/                    # componentes reutilizáveis
│   └── sections/              # as 10 seções de demonstração
└── App.jsx, components/, util/, index.css   # calculadora de investimentos
                                             # (CSS puro, fora da entrada atual)
```

O board usa apenas utilities do Tailwind, com variantes como strings completas de
classe e `cn()` para composição condicional. O dark mode é resolvido por tokens
(`@custom-variant dark (&:where(.dark, .dark *))`), sem `prefers-color-scheme`.
