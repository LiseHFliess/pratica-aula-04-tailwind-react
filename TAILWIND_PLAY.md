# Tailwind Play — Board de Laboratórios

Registro dos laboratórios feitos no [Tailwind Play](https://play.tailwindcss.com), com o
código final e a explicação das classes usadas.

> **Como ler este arquivo:** cada laboratório traz o CSS do painel, o HTML final, as
> decisões de classe e as respostas dos checkpoints. Todos usam **Tailwind CSS v4**
> (`@import "tailwindcss"`), a mesma versão do projeto React em `src/`.

## Executando localmente

Cada laboratório também existe como **página HTML executável** em `tailwind-play/`,
com o mesmo HTML final mostrado abaixo. Elas são servidas pelo próprio Vite:

```bash
npm install
npm run dev
```

- Índice dos labs: <http://localhost:5173/tailwind-play/>
- Board em React: <http://localhost:5173/>

| # | Laboratório | Arquivo | URL no dev server |
|---|---|---|---|
| 01 | Profile Card | [`tailwind-play/01-profile-card.html`](./tailwind-play/01-profile-card.html) | `/tailwind-play/01-profile-card.html` |
| 02 | Product Grid | [`tailwind-play/02-product-grid.html`](./tailwind-play/02-product-grid.html) | `/tailwind-play/02-product-grid.html` |
| 03 | Theme Lab | [`tailwind-play/03-theme-lab.html`](./tailwind-play/03-theme-lab.html) | `/tailwind-play/03-theme-lab.html` |
| 04 | Login Form | [`tailwind-play/04-login-form.html`](./tailwind-play/04-login-form.html) | `/tailwind-play/04-login-form.html` |
| 05 | Pricing Cards | [`tailwind-play/05-pricing-cards.html`](./tailwind-play/05-pricing-cards.html) | `/tailwind-play/05-pricing-cards.html` |
| 06 | Settings Toggle | [`tailwind-play/06-settings-toggle.html`](./tailwind-play/06-settings-toggle.html) | `/tailwind-play/06-settings-toggle.html` |
| 07 | FAQ Accordion | [`tailwind-play/07-faq-accordion.html`](./tailwind-play/07-faq-accordion.html) | `/tailwind-play/07-faq-accordion.html` |
| 08 | Dashboard Summary | [`tailwind-play/08-dashboard-summary.html`](./tailwind-play/08-dashboard-summary.html) | `/tailwind-play/08-dashboard-summary.html` |
| 09 | Theme Toggle | [`tailwind-play/09-theme-toggle.html`](./tailwind-play/09-theme-toggle.html) | `/tailwind-play/09-theme-toggle.html` |

As páginas usam um CSS próprio (`tailwind-play/play.css`) com os tokens dos labs
03 e 09 (`--color-background`, `--color-surface`, `--color-foreground`,
`--color-muted`, `--color-border`, `--color-chestnut`) e a classe `.custom-colors`.
Isso mantém essas definições fora do bundle do board em React, que tem o seu
próprio `src/tailwind.css`.

**Índice**

1. [Profile Card — entendendo utility-first](#01--profile-card-entendendo-utility-first)
2. [Product Grid — estados e responsividade](#02--product-grid--estados-e-responsividade)
3. [Theme Lab — tokens, dark mode e @layer](#03--theme-lab--tokens-dark-mode-e-layer)
4. [Login Form — focus e acessibilidade](#04--login-form--focus-e-acessibilidade)
5. [Pricing Cards — composição e hierarquia](#05--pricing-cards--composição-e-hierarquia)
6. [Settings Toggle — peer e checked](#06--settings-toggle--peer-e-checked)
7. [FAQ Accordion — details e open](#07--faq-accordion--details-e-open)
8. [Dashboard Summary — Grid e composição](#08--dashboard-summary--grid-e-composição)
9. [Theme Toggle Button — dark mode com um botão](#09--theme-toggle-button--dark-mode-com-um-botão)

---

## 01 — Profile Card: entendendo utility-first

> Ponto de partida: nenhum componente, nenhuma abstração. Só utilities aplicadas
> direto no markup, para sentir como espaçamento, tamanho, tipografia, cor, borda e
> sombra se combinam.

**Conceitos do enunciado:** utility-first, spacing, sizing, typography, colors, borders, shadows, flexbox

### CSS

```css
@import "tailwindcss";
```

### HTML final

```html
<main class="min-h-screen bg-slate-950 p-6 text-slate-100">
  <section class="mx-auto max-w-xl">
    <header class="space-y-1">
      <span class="text-[11px] font-semibold tracking-[0.2em] text-indigo-400 uppercase">
        Tailwind Play
      </span>
      <h1 class="text-2xl font-bold tracking-tight">Profile Card</h1>
      <p class="text-sm text-slate-400">
        Utility-first: spacing, sizing, tipografia, cores, bordas e sombras.
      </p>
    </header>

    <article
      class="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-black/20"
    >
      <div class="flex items-center gap-4">
        <span
          class="grid size-14 shrink-0 place-items-center rounded-full bg-indigo-600 text-lg font-bold text-white"
        >
          FC
        </span>

        <div class="min-w-0">
          <span
            class="inline-flex items-center rounded-full bg-indigo-500/10 px-2.5 py-0.5 text-xs font-bold tracking-wide text-indigo-300 uppercase"
          >
            Front-End
          </span>
          <h2 class="mt-1.5 truncate text-lg font-bold">Florisponfildo Mello Costa</h2>
          <p class="text-sm text-slate-400">Dev · React · SPA</p>
        </div>
      </div>

      <p class="mt-5 text-sm text-slate-300">
        Estudando como pequenas utilities podem ser combinadas para construir
        interfaces.
      </p>

      <div class="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          class="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:outline-none"
        >
          Seguir
        </button>

        <button
          type="button"
          class="rounded-lg bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-100 transition-colors hover:bg-slate-700 focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:outline-none"
        >
          Perfil
        </button>
      </div>
    </article>
  </section>
</main>
```

### Por que essas classes

| Classe | O que resolve |
|---|---|
| `mx-auto max-w-xl` | Centraliza o card e limita a largura de leitura. |
| `rounded-2xl border border-slate-800` | Borda + raio: separa o card do fundo sem precisar de imagem. |
| `p-6` | Padding interno de 24px — o respiro que faz o card "existir". |
| `shadow-lg shadow-black/20` | Sombra com a cor explícita e 20% de opacidade (no escuro, sombra preta pura some). |
| `flex items-center gap-4` | Avatar e texto lado a lado, alinhados pelo centro vertical, 16px de respiro. |
| `size-14` | `width` e `height` iguais (56px) em uma classe — perfeito para avatar circular. |
| `shrink-0` | Impede o avatar de ser esmagado quando o nome é longo. |
| `min-w-0` | Deixa o bloco de texto encolher abaixo do conteúdo; sem isso o `truncate` não funciona. |
| `truncate` | `overflow: hidden` + `text-overflow: ellipsis` + `white-space: nowrap` em uma classe. |
| `text-xs font-bold tracking-wide uppercase` | Badge legível: tamanho pequeno + peso + espaço entre letras + caixa alta. |
| `mt-1.5` / `mt-5` | Ritmo vertical: 6px entre badge e nome, 20px entre blocos. |
| `flex flex-wrap gap-3` | Botões em linha que quebra quando falta espaço (telas estreitas). |
| `transition-colors` + `hover:` | Resposta suave ao mouse. |
| `focus-visible:ring-2` + `ring-offset-*` | Anel de foco só no teclado, afastado do botão pela cor do fundo. |

### Checkpoint

**1. O que muda ao escrever utility-first?**

O CSS deixa de ser um arquivo à parte com nomes inventados (`.card-profile`, `.card-profile__name`) e passa a ser a própria composição no markup. Ganha-se velocidade e previsibilidade (o estilo está onde o elemento está), ao custo de markup mais longo — que é resolvido depois com componentes (`Button`, `Badge`, `Avatar`), não com CSS novo.

**2. Por que `size-14` e não `w-14 h-14`?**

No Tailwind v4 `size-*` grava `width` e `height` de uma vez. Para avatar, ícone e área quadrada as duas medidas são sempre iguais, então uma classe basta. Em elementos com proporções diferentes (um card 16:9, por exemplo) aí sim `w-*`/`h-*` ou `aspect-*`.

**3. Para que serve `min-w-0` no bloco de texto?**

Item flex tem `min-width: auto` por padrão, ou seja, nunca encolhe abaixo do conteúdo. Com um nome comprido, o texto empurraria o card e o `truncate` não cortaria nada. `min-w-0` libera o encolhimento e permite o `text-overflow: ellipsis`.

**4. Por que o avatar tem `shrink-0`?**

Porque no `flex` os itens podem encolher. O avatar precisa manter 56px para continuar redondo; o texto é quem deve ceder espaço.

**5. Como borda, raio e sombra criam profundidade sem imagem?**

`border` desenha o contorno, `rounded-2xl` amacia o canto e `shadow-lg` simula a luz criando uma cópia desfocada atrás do card. Juntos dão a sensação de camada — e custam zero requisição.

**6. Por que `tracking-wide` e `uppercase` no badge?**

Caixa alta com letras espaçadas é o padrão visual de rótulo curto: aumenta a legibilidade em tamanho pequeno (`text-xs`) e separa o badge do nome, que é texto normal.

**7. Por que dois botões com pesos diferentes?**

`Seguir` é a ação principal (fundo cheio, cor de marca) e `Perfil` é secundária (fundo neutro). A hierarquia vem de cor e contraste, não de tamanho — os dois têm a mesma altura e o mesmo padding.

### Experiências

- `p-6` → `p-8`: card mais arejado; `p-2` deixa tudo apertado.
- `size-14` → `size-20`: avatar maior, o texto continua alinhado pelo centro.
- `gap-4` → `gap-2`: avatar e texto quase colados (perde-se a leitura).
- Remover `min-w-0`: o nome longo estoura o card e o `truncate` para de funcionar.
- Remover `truncate`: o nome quebra em várias linhas e desalinha o bloco.
- `rounded-2xl` → `rounded-none`: o card fica "quadrado", sem mudar o layout.
- Remover `shadow-lg`: o card cola no fundo escuro (a borda ainda segura a forma).
- `flex-wrap` → sem ele: os botões saem do card em telas estreitas.
- Trocar `bg-indigo-600` por `bg-emerald-600` nos dois botões: muda a identidade sem tocar em espaçamento.
- Navegar com Tab: o anel de foco aparece nos dois botões, na ordem do DOM.

---

## 02 — Product Grid: estados e responsividade

**Conceitos do enunciado:** Grid, responsive, hover, focus, active, disabled, flexbox, utility-first

### CSS

```css
@import "tailwindcss";
```

### HTML final

```html
<main class="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
  <section class="mx-auto max-w-6xl">
    <header class="max-w-xl space-y-2">
      <span class="text-[11px] font-semibold tracking-[0.2em] text-indigo-400 uppercase">
        Tailwind Play
      </span>
      <h1 class="text-3xl font-bold tracking-tight">Product Grid Responsivo</h1>
      <p class="text-sm text-slate-400">
        Pratique breakpoints, Grid, hover, focus, active e disabled.
      </p>
    </header>

    <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <!-- 01 -->
      <article
        class="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-indigo-500/60 hover:shadow-indigo-500/10"
      >
        <div
          class="relative grid aspect-[16/10] place-items-center overflow-hidden bg-linear-to-br from-indigo-500/20 via-slate-900 to-slate-900"
        >
          <span
            class="absolute top-3 left-3 rounded-full bg-slate-950/60 px-2 py-0.5 text-[10px] font-bold tracking-[0.14em] text-indigo-300 uppercase ring-1 ring-indigo-500/30 ring-inset"
          >
            Starter
          </span>
          <span
            class="text-5xl font-black text-indigo-400/40 transition duration-300 group-hover:scale-110 group-hover:text-indigo-300/70"
            aria-hidden="true"
          >
            01
          </span>
        </div>

        <div class="space-y-3 p-5">
          <h2 class="text-lg font-semibold">UI Foundations</h2>
          <p class="text-sm text-slate-400">Layout, spacing, tipografia e cores.</p>
          <button
            type="button"
            class="w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:outline-none active:scale-95"
          >
            Escolher
          </button>
        </div>
      </article>

      <!-- 02 -->
      <article
        class="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/60 hover:shadow-emerald-500/10"
      >
        <div
          class="relative grid aspect-[16/10] place-items-center overflow-hidden bg-linear-to-br from-emerald-500/20 via-slate-900 to-slate-900"
        >
          <span
            class="absolute top-3 left-3 rounded-full bg-slate-950/60 px-2 py-0.5 text-[10px] font-bold tracking-[0.14em] text-emerald-300 uppercase ring-1 ring-emerald-500/30 ring-inset"
          >
            Intermediate
          </span>
          <span
            class="text-5xl font-black text-emerald-400/40 transition duration-300 group-hover:scale-110 group-hover:text-emerald-300/70"
            aria-hidden="true"
          >
            02
          </span>
        </div>

        <div class="space-y-3 p-5">
          <h2 class="text-lg font-semibold">Responsive UI</h2>
          <p class="text-sm text-slate-400">Breakpoints e variantes condicionais.</p>
          <button
            type="button"
            class="w-full rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-500 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:outline-none active:scale-95"
          >
            Escolher
          </button>
        </div>
      </article>

      <!-- 03 (disabled) -->
      <article
        class="group overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1"
      >
        <div
          class="relative grid aspect-[16/10] place-items-center overflow-hidden bg-linear-to-br from-slate-800 via-slate-900 to-slate-900"
        >
          <span
            class="absolute top-3 left-3 rounded-full bg-slate-950/60 px-2 py-0.5 text-[10px] font-bold tracking-[0.14em] text-slate-400 uppercase ring-1 ring-slate-700 ring-inset"
          >
            Locked
          </span>
          <span
            class="text-5xl font-black text-slate-600 transition duration-300 group-hover:scale-110"
            aria-hidden="true"
          >
            03
          </span>
        </div>

        <div class="space-y-3 p-5">
          <h2 class="text-lg font-semibold text-slate-300">Advanced UI</h2>
          <p class="text-sm text-slate-500">Este plano ainda está indisponível.</p>
          <button
            type="button"
            disabled
            class="w-full rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-semibold text-slate-300 transition disabled:cursor-not-allowed disabled:opacity-50"
          >
            Indisponível
          </button>
        </div>
      </article>
    </div>
  </section>
</main>
```

### Dez classes de responsividade/estado explicadas

| Classe | Explicação |
|---|---|
| `grid` | Cria o container em grid (`display: grid`), com uma coluna implícita. |
| `grid-cols-1` | Uma coluna em qualquer largura — ponto de partida mobile-first. |
| `sm:grid-cols-2` | A partir de 640px, duas colunas iguais. |
| `lg:grid-cols-3` | A partir de 1024px, três colunas iguais. |
| `group` | Marca o card como "dono" do estado para os `group-*` dos filhos. |
| `group-hover:scale-110` | Aplica `scale` no filho quando o mouse está em **qualquer** parte do card. |
| `hover:-translate-y-1` | Sobe o card 4px no hover (com `transition` vira animação). |
| `focus-visible:ring-2` | Anel de 2px só quando o foco vem do teclado. |
| `active:scale-95` | Encolhe 5% enquanto o botão está pressionado. |
| `disabled:opacity-50` | Deixa o botão translúcido; combinado com `disabled:cursor-not-allowed` comunica o bloqueio. |

> Breakpoints do Tailwind são **min-width**: `sm` = 640px, `md` = 768px,
> `lg` = 1024px, `xl` = 1280px, `2xl` = 1536px. Sem prefixo = todos os tamanhos.

### Experimentos pedidos

- **Remover `sm:grid-cols-2`** → o grid fica 1 coluna até 1024px e pula direto para 3 no `lg`.
- **`lg:grid-cols-4`** com 3 cards → sobra uma célula vazia no fim da linha.
- **Remover `group`** → os `group-hover:` dos filhos param de disparar (a variante fica sem pai).
- **`group-hover:rotate-2`** → o número gira 2° em vez de crescer.
- **Remover `transition`** → as mudanças ficam instantâneas.
- **`active:scale-90`** → o clique "encolhe" mais (10%).
- **Remover `disabled:opacity-50`** → o botão desabilitado fica visualmente igual ao ativo (só o cursor muda).
- **Quarto card** → basta copiar um `<article>`; com `sm:grid-cols-2 lg:grid-cols-3` ele cai na primeira coluna da segunda linha.

---

## 03 — Theme Lab: tokens, dark mode e @layer

**Conceitos do enunciado:** Dark mode, @theme, @custom-variant, @layer, @apply, design tokens, colors, utility-first

### CSS (fornecido pelo laboratório)

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-primary: #2563eb;

  --color-background: var(--background);
  --color-surface: var(--surface);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-border: var(--border);

  --color-chestnut: var(--chestnut);
}

:root {
  --background: #ffffff;
  --surface: #f4f4f5;
  --foreground: #18181b;
  --muted: #71717a;
  --border: #e4e4e7;

  --chestnut: #973f29;
}

.dark {
  --background: #15155a;
  --surface: #18181b;
  --foreground: #fafafa;
  --muted: #a1a1aa;
  --border: #27272a;

  --chestnut: #d9785f;
}

@layer components {
  .custom-colors {
    @apply bg-chestnut p-2 text-center text-2xl text-white;
  }
}
```

### HTML final

```html
<main class="min-h-screen bg-background p-6 text-foreground">
  <header class="mx-auto max-w-4xl space-y-2">
    <span class="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
      Theme Lab
    </span>
    <h1 class="text-3xl font-bold tracking-tight">Tailwind Design Tokens</h1>
    <p class="text-sm text-muted">
      O mesmo componente deverá funcionar com tokens do tema claro e escuro.
    </p>
  </header>

  <div class="mx-auto mt-8 grid max-w-4xl gap-6 lg:grid-cols-2">
    <!-- Tema claro (:root) -->
    <section class="space-y-4 rounded-2xl border border-border bg-surface p-6 shadow-sm">
      <span class="text-xs font-bold tracking-[0.16em] text-primary uppercase">Light</span>
      <h2 class="text-xl font-semibold">Tema claro</h2>
      <p class="text-sm text-muted">
        Este bloco deve utilizar os valores definidos em :root.
      </p>

      <div class="rounded-xl border border-border bg-background p-4">
        <strong class="text-sm">Surface token</strong>
        <p class="mt-1 text-sm text-muted">Use background, surface, muted e border.</p>
      </div>

      <div class="custom-colors rounded-xl">Cor Chestnut customizada</div>

      <button
        type="button"
        class="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        Primary Button
      </button>
    </section>

    <!-- Tema escuro (.dark) -->
    <section class="dark space-y-4 rounded-2xl border border-border bg-surface p-6 shadow-sm">
      <span class="text-xs font-bold tracking-[0.16em] text-primary uppercase">Dark</span>
      <h2 class="text-xl font-semibold">Tema escuro</h2>
      <p class="text-sm text-muted">
        Este bloco deve utilizar os valores definidos em .dark.
      </p>

      <div class="rounded-xl border border-border bg-background p-4">
        <strong class="text-sm">Surface token</strong>
        <p class="mt-1 text-sm text-muted">
          Observe como os tokens mudam mantendo as mesmas utilities.
        </p>
      </div>

      <div class="custom-colors rounded-xl dark:rounded-none">Cor Chestnut customizada</div>

      <button
        type="button"
        class="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-chestnut"
      >
        Primary Button
      </button>
    </section>
  </div>
</main>
```

### Checkpoint

**1. Qual a diferença entre `:root`, `.dark` e `@theme`?**

- `:root` é o seletor do `<html>` no CSS puro: é onde ficam os **valores** das
  variáveis do tema claro.
- `.dark` é uma classe que redefine as mesmas variáveis — quando ela existe, os
  valores mudam sem tocar em nenhuma utility.
- `@theme` é a diretiva do Tailwind v4 que **expõe** essas variáveis como tokens
  do framework: cada `--color-*` declarado ali gera utilities (`bg-background`,
  `text-muted`, `border-border`...).

Ou seja: `@theme` cria as classes, `:root`/`.dark` fornecem os valores.

**2. O que `--color-primary` cria?**

Gera a família de utilities de cor `primary`: `bg-primary`, `text-primary`,
`border-primary`, `ring-primary`, `from-primary`, etc. O nome depois de
`--color-` vira o nome do token.

**3. Por que background/surface são nomes semânticos?**

Porque descrevem **papel**, não aparência. `bg-surface` continua fazendo sentido
se o tema virar verde, escuro ou de alto contraste; `bg-zinc-100` descreve o
valor e precisa ser trocado em cada elemento.

**4. O que `@custom-variant` faz?**

Define/registra uma variante própria. Aqui:
`@custom-variant dark (&:where(.dark, .dark *));` faz o prefixo `dark:` valer
quando o elemento está dentro de `.dark` (ou é o próprio `.dark`), em vez de
depender de `prefers-color-scheme`.

**5. O que `@layer components` organiza?**

Coloca as classes num dos níveis de cascata do Tailwind (base → components →
utilities). Ficam **abaixo** das utilities na ordem de precedência, então
`bg-red-500` aplicada no elemento ainda vence o `@apply` de `.custom-colors`.

**6. O que `@apply` faz?**

Injeta utilities dentro de uma regra CSS comum. Serve para criar uma classe
reutilizável (`custom-colors`) sem repetir 4–5 utilities em cada elemento e sem
sair do design system.

### Experiências

- `--color-primary` → trocar por `#7c3aed` muda todos os `bg-primary/text-primary`.
- `--chestnut` só em `.dark` → o bloco escuro muda de cor sozinho.
- Remover `class="dark"` → o segundo card passa a usar os valores de `:root`.
- Criar `--color-success: #16a34a` e usar `bg-success` → nova utility disponível.
- Outra classe em `@layer components` → ex.: `.card-base { @apply rounded-2xl border border-border bg-surface p-6; }`.
- Trocar `lg:grid-cols-2` por `md:grid-cols-2` → lado a lado já a partir de 768px.

---

## 04 — Login Form: focus e acessibilidade

**Conceitos do enunciado:** Utility-first, spacing, sizing, typography, colors, borders, focus, responsive

### CSS

```css
@import "tailwindcss";
```

### HTML final

```html
<main class="grid min-h-screen place-items-center bg-slate-100 p-4">
  <section class="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
    <h1 class="text-2xl font-bold tracking-tight text-slate-900">Welcome back</h1>
    <p class="mt-1 text-sm text-slate-500">Entre na sua conta para continuar.</p>

    <form class="mt-6 space-y-4">
      <div class="space-y-1.5">
        <label for="email" class="block text-xs font-semibold text-slate-700">E-mail</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          class="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:outline-none"
        />
      </div>

      <div class="space-y-1.5">
        <label for="password" class="block text-xs font-semibold text-slate-700">Senha</label>
        <input
          id="password"
          type="password"
          placeholder="••••••••"
          class="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 focus:outline-none"
        />
      </div>

      <div class="flex flex-wrap items-center justify-between gap-3">
        <label for="remember" class="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
          <input
            id="remember"
            type="checkbox"
            checked
            class="size-4 cursor-pointer accent-blue-600"
          />
          Lembrar de mim
        </label>

        <a
          href="#"
          class="rounded text-sm font-semibold text-blue-600 transition hover:underline focus-visible:ring-2 focus-visible:ring-blue-500/40 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          Esqueci minha senha
        </a>
      </div>

      <button
        type="submit"
        class="h-12 w-full rounded-xl bg-blue-600 px-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.99]"
      >
        Sign In
      </button>
    </form>
  </section>
</main>
```

### Checkpoint

**1. Qual a diferença entre `focus:` e `focus-visible:`?**

`focus:` aplica sempre que o elemento recebe foco — inclusive no clique do mouse.
`focus-visible:` aplica quando o navegador entende que o foco deve ser **visível**
(teclado, leitor de tela). Resultado prático: anel de foco para quem navega com
Tab, sem anel "grudado" depois de um clique.

**2. Para que serve `outline-none`?**

Remove o contorno padrão do navegador. Só deve ser usado **junto** com um
indicador próprio (`ring-*`/`border-*`), senão o usuário de teclado perde a
referência de onde está.

**3. O que `accent-*` altera?**

A cor de preenchimento de controles nativos — `accent-blue-600` deixa o checkbox
(ou radio/range) azul, trocando o padrão do sistema.

**4. Por que labels são importantes?**

São o nome acessível do campo: o leitor de tela anuncia "E-mail, campo de edição"
quando o `for`/`id` estão ligados; além disso, clicar no texto foca o input
(área de clique maior) e o `placeholder` deixa de ser a única pista do conteúdo.

**5. Como `space-y-4` funciona?**

Aplica `margin-top: 1rem` em **todos os filhos menos o primeiro** (`> * + *`), ou
seja, só nos espaços entre irmãos. É diferente de `gap-4`, que exige
`flex`/`grid` no pai e não depende de margem.

### Experiências

- `max-w-md` → `max-w-lg`: card mais largo, inputs acompanham (`w-full`).
- Remover `space-y-4` → os campos colam uns nos outros.
- `h-12` → `h-14`: 56px de altura, ainda alinhados entre si.
- Remover `focus:ring-4` → só a borda muda no foco (indicador mais fraco).
- `accent-blue-600` → `accent-emerald-600`: checkbox verde.
- `rounded-xl` → `rounded-none`: visual "quadrado", sem mudar layout.
- Navegar só com Tab: a ordem é e-mail → senha → checkbox → link → botão, e cada
  parada tem indicador visível.

---

## 05 — Pricing Cards: composição e hierarquia

**Conceitos do enunciado:** Utility-first, spacing, typography, colors, borders, shadows, flexbox, grid, responsive

### CSS

```css
@import "tailwindcss";
```

### HTML final

```html
<main class="min-h-screen bg-slate-50 px-4 py-12">
  <section class="mx-auto max-w-5xl">
    <header class="mx-auto max-w-xl space-y-2 text-center">
      <span class="text-[11px] font-semibold tracking-[0.2em] text-indigo-600 uppercase">
        Pricing
      </span>
      <h1 class="text-3xl font-bold tracking-tight text-slate-900">Escolha o plano ideal</h1>
      <p class="text-sm text-slate-500">Compare recursos e preços.</p>
    </header>

    <div class="mt-10 grid gap-6 lg:grid-cols-3">
      <!-- Starter -->
      <article
        class="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
      >
        <h2 class="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">Starter</h2>

        <p class="mt-4 flex items-baseline gap-1">
          <strong class="text-4xl font-extrabold tracking-tight text-slate-900">$0</strong>
          <span class="text-sm text-slate-400">/ month</span>
        </p>

        <ul class="mt-6 space-y-2 border-t border-slate-100 pt-6 text-sm text-slate-600">
          <li class="flex items-center gap-2">
            <span aria-hidden="true" class="text-emerald-500">✓</span> Projects
          </li>
          <li class="flex items-center gap-2">
            <span aria-hidden="true" class="text-emerald-500">✓</span> Basic support
          </li>
        </ul>

        <button
          type="button"
          class="mt-auto w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.99]"
        >
          Choose
        </button>
      </article>

      <!-- Pro (destaque) -->
      <article
        class="relative flex h-full flex-col rounded-3xl border-2 border-indigo-500 bg-white p-6 shadow-xl shadow-indigo-500/10 transition hover:shadow-2xl lg:-translate-y-2"
      >
        <span
          class="absolute -top-3 left-6 rounded-full bg-indigo-600 px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] text-white uppercase"
        >
          Popular
        </span>

        <h2 class="text-xs font-semibold tracking-[0.14em] text-indigo-600 uppercase">Pro</h2>

        <p class="mt-4 flex items-baseline gap-1">
          <strong class="text-4xl font-extrabold tracking-tight text-slate-900">$29</strong>
          <span class="text-sm text-slate-400">/ month</span>
        </p>

        <ul class="mt-6 space-y-2 border-t border-slate-100 pt-6 text-sm text-slate-600">
          <li class="flex items-center gap-2">
            <span aria-hidden="true" class="text-indigo-500">✓</span> Projects
          </li>
          <li class="flex items-center gap-2">
            <span aria-hidden="true" class="text-indigo-500">✓</span> Analytics
          </li>
          <li class="flex items-center gap-2">
            <span aria-hidden="true" class="text-indigo-500">✓</span> Priority support
          </li>
        </ul>

        <button
          type="button"
          class="mt-auto w-full rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.99]"
        >
          Choose
        </button>
      </article>

      <!-- Team -->
      <article
        class="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-lg"
      >
        <h2 class="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">Team</h2>

        <p class="mt-4 flex items-baseline gap-1">
          <strong class="text-4xl font-extrabold tracking-tight text-slate-900">$79</strong>
          <span class="text-sm text-slate-400">/ month</span>
        </p>

        <ul class="mt-6 space-y-2 border-t border-slate-100 pt-6 text-sm text-slate-600">
          <li class="flex items-center gap-2">
            <span aria-hidden="true" class="text-emerald-500">✓</span> Projects
          </li>
          <li class="flex items-center gap-2">
            <span aria-hidden="true" class="text-emerald-500">✓</span> Analytics
          </li>
          <li class="flex items-center gap-2">
            <span aria-hidden="true" class="text-emerald-500">✓</span> Team access
          </li>
        </ul>

        <button
          type="button"
          class="mt-auto w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-[0.99]"
        >
          Choose
        </button>
      </article>
    </div>
  </section>
</main>
```

### Decisões

- `h-full` + `flex-col` + `mt-auto` no CTA = botões alinhados no rodapé mesmo com
  listas de tamanhos diferentes.
- O destaque do Pro é **só** borda + sombra + `lg:-translate-y-2` + badge: a
  estrutura do card é idêntica.
- `text-4xl` no preço e `text-xs` na categoria criam a hierarquia (tamanho e peso
  antes de cor).

### Experiências

- Remover `lg:-translate-y-2` → os três cards ficam alinhados no topo.
- `border-2` → `ring-4` → o destaque passa a ser um anel externo, sem mexer no layout.
- Paleta do Pro → `emerald` (borda, badge, botão e ícones).
- `lg:grid-cols-3` → `md:grid-cols-3` → três colunas já em 768px (cards ficam estreitos).
- `text-4xl` → `text-5xl` no preço → mais destaque, cuidado com o alinhamento da unidade.
- Hover nos três → `transition hover:shadow-lg` (já aplicado).

---

## 06 — Settings Toggle: peer e checked

**Conceitos do enunciado:** Utility-first, flexbox, borders, colors, focus, responsive

### CSS

```css
@import "tailwindcss";
```

### HTML final

```html
<main class="min-h-screen bg-slate-950 px-4 py-12 text-slate-100">
  <section class="mx-auto max-w-lg">
    <h1 class="text-xl font-semibold tracking-tight">Notification Settings</h1>
    <p class="mt-1 text-sm text-slate-400">Controle suas preferências de comunicação.</p>

    <div class="mt-6 space-y-4">
      <label
        class="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 transition hover:border-slate-700"
      >
        <span class="min-w-0">
          <strong class="block text-sm font-semibold">Email notifications</strong>
          <span class="text-xs text-slate-400">Receive product updates</span>
        </span>

        <span class="relative inline-flex shrink-0">
          <input type="checkbox" checked class="peer sr-only" />
          <span
            class="h-6 w-11 rounded-full bg-slate-700 transition-colors peer-checked:bg-blue-600 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-400 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-slate-950"
          ></span>
          <span
            class="pointer-events-none absolute top-0.5 left-0.5 size-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5"
          ></span>
        </span>
      </label>

      <label
        class="flex cursor-pointer items-center justify-between gap-4 rounded-xl border border-slate-800 bg-slate-900 p-4 transition hover:border-slate-700"
      >
        <span class="min-w-0">
          <strong class="block text-sm font-semibold">Marketing</strong>
          <span class="text-xs text-slate-400">Receive campaigns</span>
        </span>

        <span class="relative inline-flex shrink-0">
          <input type="checkbox" class="peer sr-only" />
          <span
            class="h-6 w-11 rounded-full bg-slate-700 transition-colors peer-checked:bg-blue-600 peer-focus-visible:ring-2 peer-focus-visible:ring-blue-400 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-slate-950"
          ></span>
          <span
            class="pointer-events-none absolute top-0.5 left-0.5 size-5 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5"
          ></span>
        </span>
      </label>
    </div>
  </section>
</main>
```

### Checkpoint

**1. Por que o input usa `peer`?**

Porque o visual do switch é construído por **irmãos** do input (o trilho e o knob).
`peer` marca o input como referência para que esses irmãos usem
`peer-checked:`/`peer-focus-visible:` reagindo ao estado dele — sem JS.

**2. O que `peer-checked:` faz?**

Aplica a utility quando o peer (o input) está `:checked`. `peer-checked:bg-blue-600`
pinta o trilho e `peer-checked:translate-x-5` desloca o knob.

**3. Por que usamos `sr-only`?**

Para esconder o checkbox **visualmente** sem removê-lo da árvore de acessibilidade:
ele continua focável por teclado, anunciado pelo leitor de tela e com estado
`checked`. `hidden`/`display:none` mataria o foco e o `peer-checked`.

**4. Por que o knob utiliza `absolute`?**

Para ficar sobreposto ao trilho (`relative` no container) e poder ser deslocado com
`translate-x-*` sem empurrar o layout.

**5. Como o `translate-x-5` cria o movimento?**

O knob começa em `left-0.5` (2px) e, quando marcado, recebe
`transform: translateX(1.25rem)` = 20px. Trilho de 44px − knob de 20px − 2px de
cada lado = 20px de curso; com `transition-transform` isso vira o deslize.

### Experiências

- Remover `peer` → todos os `peer-checked:` param de funcionar.
- `peer-checked:bg-blue-600` → `peer-checked:bg-emerald-500`.
- `translate-x-5` → `translate-x-4` → o knob não chega ao fim do trilho.
- Remover `sr-only` → o checkbox nativo aparece ao lado do switch (duplicado).
- Trocar tamanho (`h-7 w-12` + `size-6` + `translate-x-5`) → switch maior; é preciso
  recalcular o curso.
- Terceira preferência → um novo `<label>` com o mesmo par input + trilho + knob.

---

## 07 — FAQ Accordion: details e open

**Conceitos do enunciado:** Utility-first, spacing, typography, borders, colors

### CSS

```css
@import "tailwindcss";
```

### HTML final

```html
<main class="min-h-screen bg-slate-50 px-4 py-12">
  <section class="mx-auto max-w-2xl">
    <h1 class="text-2xl font-bold tracking-tight text-slate-900">
      Frequently Asked Questions
    </h1>

    <div class="mt-6 space-y-4">
      <details
        open
        class="group rounded-2xl border border-slate-200 bg-white p-4 transition-colors open:border-blue-500 open:bg-blue-50"
      >
        <summary
          class="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-slate-900 select-none hover:text-blue-700 [&::-webkit-details-marker]:hidden"
        >
          O que é utility-first?
          <span aria-hidden="true" class="transition-transform group-open:rotate-180">▾</span>
        </summary>
        <p class="mt-3 text-sm leading-relaxed text-slate-600">
          É uma abordagem baseada na composição de pequenas utilities.
        </p>
      </details>

      <details
        class="group rounded-2xl border border-slate-200 bg-white p-4 transition-colors open:border-blue-500 open:bg-blue-50"
      >
        <summary
          class="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-slate-900 select-none hover:text-blue-700 [&::-webkit-details-marker]:hidden"
        >
          Tailwind substitui CSS?
          <span aria-hidden="true" class="transition-transform group-open:rotate-180">▾</span>
        </summary>
        <p class="mt-3 text-sm leading-relaxed text-slate-600">
          Tailwind continua sendo CSS, mas oferece utilities e ferramentas.
        </p>
      </details>

      <details
        class="group rounded-2xl border border-slate-200 bg-white p-4 transition-colors open:border-blue-500 open:bg-blue-50"
      >
        <summary
          class="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-semibold text-slate-900 select-none hover:text-blue-700 [&::-webkit-details-marker]:hidden"
        >
          Como funciona dark mode?
          <span aria-hidden="true" class="transition-transform group-open:rotate-180">▾</span>
        </summary>
        <p class="mt-3 text-sm leading-relaxed text-slate-600">
          Variantes permitem alterar estilos quando um tema dark está ativo.
        </p>
      </details>
    </div>
  </section>
</main>
```

> **Nota sobre `marker:hidden`:** a variante `marker:` só aceita as propriedades
> permitidas em `::marker` (cor, fonte, `content`), então ela não remove o
> triângulo do `<summary>` em todos os navegadores. O que funciona é `list-none`
> (Safari/Firefox) + `[&::-webkit-details-marker]:hidden` (Chrome).

### Checkpoint

**1. O que o atributo HTML `open` faz?**

Torna o `<details>` aberto por padrão — estado inicial do acordeon, sem JS.

**2. Como a variante `open:` funciona?**

Aplica a utility quando o elemento está com o atributo `open`:
`open:bg-blue-50` = `[open] { background: ... }`. É um seletor de atributo, não
de estado de formulário.

**3. Para que serve `marker:hidden` (ou a alternativa usada)?**

Remover o marcador padrão (triângulo/bolinha) para desenhar um ícone próprio
(o `▾` que gira com `group-open:rotate-180`).

**4. Por que usar `details/summary` é melhor que simular tudo com divs?**

Porque o navegador já entrega abrir/fechar, foco por teclado, `aria-expanded`
implícito, busca no texto e funcionamento sem JavaScript. Simular com divs
exigiria JS e vários `aria-*` manuais.

### Experiências

- `open:bg-blue-50` → `open:bg-emerald-50` (acompanhe a borda).
- Remover `open:border-blue-500` → o card aberto fica sem indicação de borda.
- Sem esconder o marcador → aparece o triângulo nativo + o `▾` (duplicado).
- `space-y-4` → `space-y-2`/`gap-4` (com `flex flex-col`).
- Quarta pergunta → novo `<details>` com o mesmo bloco.
- Hover no summary → `hover:text-blue-700` (já aplicado).

---

## 08 — Dashboard Summary: Grid e composição

**Conceitos do enunciado:** Utility-first, grid, flexbox, responsive, spacing, sizing, typography, colors, borders

### CSS

```css
@import "tailwindcss";
```

### HTML final

```html
<main class="min-h-screen bg-slate-950 px-4 py-10 text-slate-100">
  <section class="mx-auto max-w-6xl space-y-6">
    <header class="flex flex-wrap items-center justify-between gap-3">
      <h1 class="text-2xl font-bold tracking-tight">Overview</h1>

      <button
        type="button"
        class="rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/25 transition hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none active:scale-95"
      >
        Export
      </button>
    </header>

    <div class="grid gap-4 sm:grid-cols-3">
      <article class="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <span class="text-[11px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
          Revenue
        </span>
        <strong class="mt-2 block text-3xl font-extrabold tracking-tight">128k</strong>
      </article>

      <article class="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <span class="text-[11px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
          Orders
        </span>
        <strong class="mt-2 block text-3xl font-extrabold tracking-tight">1,842</strong>
      </article>

      <article class="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <span class="text-[11px] font-semibold tracking-[0.16em] text-slate-400 uppercase">
          Conversion
        </span>
        <strong class="mt-2 block text-3xl font-extrabold tracking-tight">4.7%</strong>
      </article>
    </div>

    <div class="grid gap-4 lg:grid-cols-[2fr_1fr]">
      <section class="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h2 class="text-sm font-semibold">Performance</h2>

        <div class="mt-6 flex h-40 items-end gap-2">
          <span class="h-[35%] flex-1 rounded-t-md bg-indigo-500/40"></span>
          <span class="h-[55%] flex-1 rounded-t-md bg-indigo-500/40"></span>
          <span class="h-[42%] flex-1 rounded-t-md bg-indigo-500/40"></span>
          <span class="h-[78%] flex-1 rounded-t-md bg-indigo-500/60"></span>
          <span class="h-[64%] flex-1 rounded-t-md bg-indigo-500/60"></span>
          <span class="h-[92%] flex-1 rounded-t-md bg-indigo-500"></span>
        </div>
      </section>

      <aside class="rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h2 class="text-sm font-semibold">Activity</h2>

        <ul class="mt-4 space-y-3 text-sm text-slate-300">
          <li class="flex items-center gap-2">
            <span class="size-1.5 rounded-full bg-emerald-400" aria-hidden="true"></span>
            New order
          </li>
          <li class="flex items-center gap-2">
            <span class="size-1.5 rounded-full bg-sky-400" aria-hidden="true"></span>
            Payment approved
          </li>
          <li class="flex items-center gap-2">
            <span class="size-1.5 rounded-full bg-amber-400" aria-hidden="true"></span>
            User created
          </li>
        </ul>
      </aside>
    </div>
  </section>
</main>
```

### Checkpoint final

**1. Onde Grid foi melhor que Flexbox?**

Nos blocos 2D que precisam alinhar linhas e colunas ao mesmo tempo: a grade dos
KPIs (`sm:grid-cols-3`) e a área principal (`lg:grid-cols-[2fr_1fr]`). Com Flex
seria preciso controlar `flex-basis` de cada card e ainda assim não haveria
alinhamento entre linhas.

**2. Onde Flexbox foi melhor que Grid?**

Em uma dimensão só, com alinhamento por eixo: o header (`justify-between` +
`items-center`), cada item de atividade (bolinha + texto) e as barras
(`items-end` para alinhar pela base).

**3. O que `lg:grid-cols-[2fr_1fr]` significa?**

A partir de 1024px, duas colunas com frações livres: a primeira ocupa 2 partes e a
segunda 1 parte do espaço disponível (≈ 66%/33%, já descontando o `gap`).

**4. Como `flex-1` afeta as barras?**

Cada barra vira flexível com base 0, então todas dividem a largura por igual e
preenchem o container, mantendo `gap-2` entre elas. `h-[35%]` define só a altura,
relativa aos `h-40` do container.

**5. Quais utilities você mais reutilizou?**

`rounded-2xl`, `border border-slate-800`, `bg-slate-900`, `p-5`, `text-slate-400`,
`flex items-center gap-*`, `text-sm`, `font-semibold`, `shadow-*`, `transition`
com `hover:`/`focus-visible:` — ou seja, o "kit" de card + tipografia + estados.

### Experiências

- `sm:grid-cols-3` → `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`: KPIs em 2+1 no tablet.
- `lg:grid-cols-[2fr_1fr]` → `lg:grid-cols-[1fr_1fr]`: Performance e Activity do mesmo tamanho.
- Alturas das barras → mudam o desenho; `h-[...]` é relativo ao `h-40`.
- Remover `flex-1` das barras → elas encolhem para a largura do conteúdo (praticamente zero).
- Cor da última barra → `bg-emerald-500` para destacar o mês atual.
- `max-w-6xl` → `max-w-4xl`: dashboard mais estreito e centralizado.
- Quarto KPI → com `sm:grid-cols-3` ele cai sozinho na segunda linha (ou use `lg:grid-cols-4`).

---

## 09 — Theme Toggle Button: dark mode com um botão

**Conceitos do enunciado:** Utility-first, dark mode, @theme, @custom-variant, design tokens, colors, hover, focus

### CSS (fornecido pelo laboratório)

```css
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-primary: #2563eb;

  --color-background: var(--background);
  --color-surface: var(--surface);
  --color-foreground: var(--foreground);
  --color-muted: var(--muted);
  --color-border: var(--border);

  --color-chestnut: var(--chestnut);
}

:root {
  --background: #ffffff;
  --surface: #f4f4f5;
  --foreground: #18181b;
  --muted: #71717a;
  --border: #e4e4e7;
  --chestnut: #973f29;
}

.dark {
  --background: #15155a;
  --surface: #18181b;
  --foreground: #fafafa;
  --muted: #a1a1aa;
  --border: #27272a;
  --chestnut: #d9785f;
}

@layer components {
  .custom-colors {
    @apply bg-chestnut p-2 text-center text-white;
  }
}
```

### HTML final

```html
<main
  class="grid min-h-screen place-items-center bg-background p-4 text-foreground transition-colors duration-500"
>
  <section
    class="w-full max-w-xl space-y-5 rounded-3xl border border-border bg-surface p-6 shadow-sm transition-colors duration-500"
  >
    <header class="flex items-start justify-between gap-4">
      <div>
        <span class="text-[11px] font-semibold tracking-[0.2em] text-primary uppercase">
          Theme Lab
        </span>
        <h1 class="mt-1 text-2xl font-bold tracking-tight">Light &amp; Dark Mode</h1>
      </div>

      <button
        type="button"
        onclick="document.documentElement.classList.toggle('dark')"
        class="shrink-0 rounded-xl border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:outline-none"
      >
        <span class="dark:hidden">☾ Dark mode</span>
        <span class="hidden dark:inline">☀ Light mode</span>
      </button>
    </header>

    <p class="text-sm text-muted">
      O mesmo componente deverá mudar de aparência sem trocar sua estrutura HTML.
    </p>

    <div class="rounded-2xl border border-border bg-background p-4">
      <strong class="text-sm">Surface token</strong>
      <p class="mt-1 text-sm text-muted">Background e texto devem responder ao tema.</p>
    </div>

    <div class="custom-colors rounded-2xl dark:ring-2 dark:ring-white/20">Chestnut</div>

    <button
      type="button"
      class="w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:outline-none dark:bg-chestnut dark:text-white"
    >
      Primary Button
    </button>
  </section>
</main>
```

### Como o botão troca o tema e o texto

```html
onclick="document.documentElement.classList.toggle('dark')"
```

- `document.documentElement` = a tag `<html>`;
- `classList.toggle('dark')` adiciona `.dark` se não existir e remove se existir;
- com `.dark` no `<html>`, os tokens de `.dark` passam a valer e **toda** utility
  semântica (`bg-background`, `text-muted`, `border-border`) muda sozinha;
- o texto é resolvido só com display: `dark:hidden` esconde "☾ Dark mode" quando o
  tema escuro está ativo, e `hidden dark:inline` faz o inverso com "☀ Light mode".

### Checkpoint

**1. Onde a classe `.dark` está sendo adicionada?**

No `<html>` (`document.documentElement`), por isso afeta a página inteira. Em React
o equivalente seria `document.documentElement.classList.toggle('dark')` dentro de um
handler — mas aqui é HTML puro, sem estado de aplicação.

**2. O que `classList.toggle()` faz?**

Alterna uma classe: adiciona se ausente, remove se presente.

**3. Por que `bg-background` muda sem receber `dark:bg-...`?**

Porque `bg-background` aponta para `--color-background`, que por sua vez lê
`var(--background)`. `:root` define `#ffffff` e `.dark` redefine `#15155a` — a
utility é a mesma, o valor por trás muda.

**4. Qual a diferença entre mudar tokens e utilizar `dark:` diretamente?**

- **Token**: um lugar para mudar, todos os componentes acompanham; ideal para
  cores de superfície/texto.
- **`dark:`**: útil para exceções pontuais (uma borda extra, um `ring`, esconder
  um texto). Exagerar em `dark:` espalha a paleta pelo markup.

**5. O que `dark:hidden` faz?**

Esconde o elemento quando `.dark` está ativo (`display: none` no tema escuro).

**6. Como o botão sabe qual texto mostrar?**

Não "sabe": os dois textos existem no DOM e as classes de display alternam qual
aparece. Sem JS de conteúdo, só CSS.

**7. Por que `transition-colors` melhora a experiência?**

Suaviza a troca de cores (300–500ms) evitando o "flash" seco entre temas, o que
deixa claro que a interface respondeu ao clique.

### Experiências

- Clicar várias vezes → `<html>` ganha/perde `.dark` a cada clique.
- Remover `transition-colors` → a troca fica instantânea.
- `duration-500` → `duration-1000` → transição lenta (quase arrastada).
- Remover `dark:hidden` → os dois textos aparecem no tema escuro.
- Remover `hidden dark:inline` → "☀ Light mode" nunca aparece.
- Botão dark amarelo → trocar `dark:bg-chestnut` por `dark:bg-amber-400 dark:text-slate-900`.
- `--background` no `.dark` → outro tom de fundo para o tema escuro.
- `--chestnut` só no `.dark` → o bloco Chestnut muda de cor sem classe extra.
- Nova área `bg-surface` → herda o token automaticamente.
- `dark:` explícito → `dark:ring-2 dark:ring-white/20` no bloco Chestnut.

### Challenge — toggle switch + 3 componentes com tokens

O botão vira um switch mantendo o mesmo `onclick`:

```html
<button
  type="button"
  onclick="document.documentElement.classList.toggle('dark')"
  class="inline-flex h-8 w-14 shrink-0 items-center rounded-full border border-border bg-surface px-1 transition-colors focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:outline-none"
>
  <span
    class="size-6 rounded-full bg-primary transition-transform duration-300 dark:translate-x-6"
  ></span>
  <span class="sr-only">Alternar tema</span>
</button>
```

> O knob anda sozinho porque `.dark` fica no `<html>`: o botão é descendente de
> `.dark`, então `dark:translate-x-6` vale para ele. Nenhuma classe de tema é
> trocada no JS — só a classe do `<html>`. O curso é de 24px porque o trilho tem
> 56px (`w-14`), 4px de padding de cada lado (`px-1`) e o knob tem 24px (`size-6`):
> 56 − 4 − 4 − 24 = 24px.

Card, badge e alert usando apenas tokens:

```html
<!-- Card -->
<article class="rounded-2xl border border-border bg-surface p-5">
  <h2 class="text-sm font-semibold">Card</h2>
  <p class="mt-1 text-sm text-muted">Superfície e texto vêm dos tokens.</p>
</article>

<!-- Badge -->
<span
  class="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-1 text-[10px] font-bold tracking-[0.08em] text-primary uppercase"
>
  Badge
</span>

<!-- Alert -->
<div class="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4">
  <span class="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
    i
  </span>
  <div>
    <p class="text-sm font-semibold">Alert</p>
    <p class="mt-0.5 text-sm text-muted">Nenhuma cor Light/Dark repetida aqui.</p>
  </div>
</div>
```

---

## Fechamento

- Os labs foram feitos em HTML puro no Tailwind Play e estão versionados como páginas
  executáveis em `tailwind-play/` (índice em `/tailwind-play/`); a versão React dos
  mesmos padrões está em `src/board/` (ver [`README.md`](./README.md)).
- Utilities que mais apareceram nos 9 labs: `grid`/`grid-cols-*` + breakpoints,
  `flex`/`items-center`/`justify-between`, `gap-*` e `space-y-*`, `rounded-*`,
  `border`/`border-*`, `bg-*`/`text-*` semânticos, `shadow-*`, `transition` e as
  variantes de estado (`hover:`, `focus-visible:`, `active:`, `disabled:`,
  `group-hover:`, `peer-checked:`, `open:`, `dark:`).
- Regra que se repetiu: **estado e responsividade são classes**, nunca JavaScript —
  exceto o toggle de tema, que só alterna a classe `.dark` no `<html>`.
