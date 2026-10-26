# React + Tailwind — Component Board

Board único com os **10 exercícios** da Prática em Aula 04 (Tailwind CSS & React).
Todos os componentes são estáticos, recebem dados por **props** e são reaproveitados
entre os exercícios — nenhum `useState` foi utilizado.

## Stack

- **React 19** + **Vite 7**
- **Tailwind CSS v4** (plugin `@tailwindcss/vite`, sem `tailwind.config.js`)
- Tokens de tema em `@theme` (`src/tailwind.css`)
- Zero bibliotecas de UI, ícones ou gráficos

## Como rodar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # build de produção em dist/
npm run preview  # serve o build
```

> Node 20.19+ (o Vite 7 exige essa versão mínima).

Com o dev server no ar:

- **Board em React** (os 10 exercícios): <http://localhost:5173/>
- **Labs do Tailwind Play** (9 páginas HTML): <http://localhost:5173/tailwind-play/>

## Estrutura

```
tailwind-play/                 # os 9 labs do Tailwind Play (HTML puro, executável)
├── index.html                 # índice dos laboratórios
├── play.css                   # tokens dos labs (@theme, .dark) + .custom-colors
├── 01-button-spacing.html
├── 02-product-grid.html
├── 03-theme-lab.html
├── 04-login-form.html
├── 05-pricing-cards.html
├── 06-settings-toggle.html
├── 07-faq-accordion.html
├── 08-dashboard-summary.html
└── 09-theme-toggle.html

src/
├── index.jsx                 # entrada: renderiza o board
├── tailwind.css              # @import "tailwindcss" + @theme + dark variant
├── board/
│   ├── BoardApp.jsx          # hero, navegação e registro dos 10 exercícios
│   ├── lib/cn.js             # helper de classes condicionais
│   ├── ui/                   # componentes reutilizáveis
│   │   ├── Button.jsx        # ex. 01
│   │   ├── Avatar.jsx        # ex. 02
│   │   ├── Badge.jsx         # ex. 02
│   │   ├── ProfileCard.jsx   # ex. 03
│   │   ├── ProductCard.jsx   # ex. 04
│   │   ├── InputField.jsx    # ex. 05
│   │   ├── KpiCard.jsx       # ex. 06
│   │   ├── PricingCard.jsx   # ex. 07
│   │   ├── Alert.jsx         # ex. 08
│   │   ├── NavLink.jsx       # ex. 09
│   │   ├── Navbar.jsx        # ex. 09
│   │   ├── ExerciseSection.jsx  # casca de cada seção do board
│   │   ├── DemoRow.jsx          # agrupador de demonstração
│   │   └── Sidebar.jsx          # navegação lateral
│   └── sections/
│       ├── Exercise01ButtonSystem.jsx
│       ├── Exercise02BadgeAvatar.jsx
│       ├── Exercise03ProfileCard.jsx
│       ├── Exercise04ProductCard.jsx
│       ├── Exercise05LoginForm.jsx
│       ├── Exercise06KpiCard.jsx
│       ├── Exercise07PricingCard.jsx
│       ├── Exercise08AlertNotification.jsx
│       ├── Exercise09ResponsiveNavbar.jsx
│       ├── Exercise10MiniDashboard.jsx
│       └── dashboard/DashboardOverview.jsx
├── App.jsx / components / util / index.css   # simulador da aula anterior (preservado)
```

## Exercícios

| # | Seção | O que demonstra | Tailwind em destaque |
|---|-------|-----------------|----------------------|
| 01 | Button System | 1 componente, 4 variantes, 3 tamanhos, `fullWidth` | `h-11`, `rounded-xl`, `hover:`, `focus-visible:`, `active:`, `disabled:` |
| 02 | Badge + Avatar | componentes pequenos e independentes | `size-*`, `rounded-full`, `grid place-items-center`, `uppercase`, `tracking-*` |
| 03 | Profile Card | composição (Avatar + Badge + Button) | `items-center`, `gap-*`, `flex-1`, `max-w-[420px]`, `shadow-sm` |
| 04 | Product Card | hover só com CSS | `overflow-hidden`, `aspect-[4/3]`, `group`, `group-hover:*`, `duration-*` |
| 05 | Login Form | formulário estático e acessível | `focus-visible:ring-*`, `outline-none`, `placeholder:`, `h-[50px]` |
| 06 | KPI Card | hierarquia + cor semântica por prop | `justify-between`, `text-4xl`, `font-extrabold`, `ring-*` |
| 07 | Pricing Card | lista via `map()` e destaque condicional | `space-y-3`, `w-full`, `highlighted`, `shadow-xl` |
| 08 | Alert | variantes semânticas + ação opcional | `bg-*-50`, `text-*-700`, `rounded-2xl`, `gap-3.5` |
| 09 | Responsive Navbar | responsividade sem JavaScript | `hidden`, `md:flex`, `md:hidden`, `justify-between` |
| 10 | Mini Dashboard | composição final + dark mode | `grid`, `lg:grid-cols-3`, `lg:col-span-2`, `dark:` |

## Decisões de implementação

### `Button` com mapa de variantes

Um único arquivo expõe `variant`, `size`, `fullWidth`, `type` e `disabled`.
As variantes são **strings completas** de classes em um objeto:

```js
const variants = {
  primary: 'bg-brand-600 text-white shadow-sm hover:bg-brand-500 …',
  danger: 'bg-rose-600 text-white shadow-sm hover:bg-rose-500 …',
};
```

Isso evita `bg-${cor}-500`: o Tailwind varre o código como texto e **não gera**
classes montadas em runtime. `base`, tamanho e `className` são somados por `cn()`,
então não há duplicação de JSX entre as variantes.

### `cn()` em vez de template string

```js
export const cn = (...classes) => classes.filter(Boolean).join(' ');
```

Classes condicionais entram como `condicao && 'classe'` ou ternário, sempre com a
string completa. Falsy é descartado, então nada de `false` no `class` do DOM.

### ProductImage ficou **inline**

`ProductCard` tem uma área visual que pode ser imagem (`image`) ou um placeholder
com emoji (`icon`). Ela é usada uma única vez, não tem props próprias e depende do
`group` do card para o `group-hover:`. Criar `ProductImage.jsx` só adicionaria
indireção — por isso está no mesmo arquivo, com essa justificativa em comentário.

### `InputField` acessível, com erro por prop

`label` e `input` são ligados por `htmlFor`/`id`; o erro chega como prop e usa
`aria-invalid` + `aria-describedby` apontando para o parágrafo de erro. Nenhum
state, nenhuma validação: a aparência de erro (borda rose + ring rose) é só
condicional de classe.

### Navbar: uma estrutura, não duas

Em vez de `DesktopNav` + `MobileNav`, a mesma marcação usa `hidden md:flex`
(links e CTA a partir de 768px) e `md:hidden` (botão Menu abaixo disso).
Menos duplicação e zero JavaScript — a lógica de abrir/fechar fica para a
próxima aula.

### Dark mode do dashboard

`src/tailwind.css` define a variante por classe:

```css
@custom-variant dark (&:where(.dark, .dark *));
```

Assim o exercício 10 renderiza o **mesmo** `DashboardOverview` dentro de um
`<div class="dark">`, sem `useState` nem `prefers-color-scheme` do sistema.
As cores vêm de `dark:bg-slate-950`, `dark:border-slate-800`, etc.

### Por que alguns blocos não viraram componentes

`DashboardHeader`, `KpiGrid`, `PerformanceCard` e `ActivityCard` existem apenas
dentro do dashboard — não são reutilizados em outro lugar, então continuam no
mesmo arquivo (`sections/dashboard/DashboardOverview.jsx`). Já `KpiCard`,
`Button`, `Badge` e `Avatar` são compartilhados entre exercícios e moram em
`src/board/ui/`.

## Tailwind Play

Os 9 laboratórios (button, product grid, theme lab, login, pricing cards, toggle,
FAQ, dashboard e theme toggle) estão em `tailwind-play/`, **cada um como página HTML
própria** servida pelo Vite — abra `/tailwind-play/` no dev server para o índice, ou
o arquivo direto (`/tailwind-play/03-theme-lab.html`).

O código final de cada um, a explicação das classes e as respostas dos checkpoints
estão em [`TAILWIND_PLAY.md`](./TAILWIND_PLAY.md).

Dois detalhes de organização:

- As páginas usam `tailwind-play/play.css`, que redeclara os tokens dos labs 03 e 09
  (`--color-background`, `--color-surface`, `--color-foreground`, `--color-muted`,
  `--color-border`, `--color-chestnut`) e a classe `.custom-colors`. Essas definições
  ficariam redundantes no board em React, então não entram em `src/tailwind.css`.
- `vite.config.js` declara cada página como entrada do build (`rollupOptions.input`),
  então `npm run build` gera `dist/tailwind-play/*.html` junto com o board.

## Passo a passo do repositório

O histórico foi construído etapa por etapa — `git log --oneline` mostra exatamente
esta ordem, e cada commit tem o diff isolado da sua entrega (`git show <hash>`).

| Etapa | Entrega | Commit |
|---|---|---|
| 0 | Simulador da aula anterior | `feat: simulador de investimentos em React` |
| 1 | Tailwind v4 + casca do board | `chore: configura Tailwind CSS v4 e casca do component board` |
| 2–11 | Exercícios 01 → 10, um commit por exercício | `feat: exercise 01 …` até `feat: exercise 10 …` |
| 12 | Correção do badge do product card | `fix: badge do product card usa apenas as cores da variante` |
| 13 | README | `docs: README com estrutura, decisoes e checklist dos 10 exercicios` |
| 14 | `TAILWIND_PLAY.md` com os 9 labs | `docs: TAILWIND_PLAY.md com os 9 laboratorios e checkpoints` |
| 15 | Fontes do Tailwind restritas | `fix: limita as fontes do Tailwind para nao gerar CSS dos exemplos em .md` |
| 16 | Base dos labs (`play.css` + índice) | `chore: base dos labs do Tailwind Play` |
| 17–25 | Labs 01 → 09, um commit por laboratório | `feat: lab 01 …` até `feat: lab 09 …` |
| 26 | Labs no build do Vite | `chore: inclui os labs no build do Vite` |
| 27 | Links e instruções dos labs | `docs: aponta os labs para as paginas executaveis em tailwind-play` |

## Simulador da aula anterior

O projeto original (Investment Calculator, com CSS puro em `src/index.css`)
continua no repositório em `src/App.jsx`, `src/components` e `src/util`.
Para visualizá-lo, troque a entrada em `src/index.jsx` por:

```jsx
import App from './App.jsx';
import './index.css';
```

## Pontos para explicar na revisão

- Como `props` viram classes (mapa de variantes, ternários e `cn`).
- Diferença entre `focus:` e `focus-visible:` no botão e no input.
- Por que `group-hover:` funciona no product card (o `group` fica no card).
- Por que não usar nomes de classe dinâmicos no Tailwind.
- Como `hidden md:flex` + `md:hidden` resolvem a navbar sem JS.
- Por que o dark mode usa `.dark` e não `prefers-color-scheme`.
- Por que alguns blocos são componentes e outros são apenas marcação local.
