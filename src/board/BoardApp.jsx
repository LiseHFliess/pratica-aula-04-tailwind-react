import Sidebar from './ui/Sidebar.jsx';
import Exercise01ButtonSystem from './sections/Exercise01ButtonSystem.jsx';
import Exercise02BadgeAvatar from './sections/Exercise02BadgeAvatar.jsx';
import Exercise03ProfileCard from './sections/Exercise03ProfileCard.jsx';
import Exercise04ProductCard from './sections/Exercise04ProductCard.jsx';
import Exercise05LoginForm from './sections/Exercise05LoginForm.jsx';
import Exercise06KpiCard from './sections/Exercise06KpiCard.jsx';
import Exercise07PricingCard from './sections/Exercise07PricingCard.jsx';
import Exercise08AlertNotification from './sections/Exercise08AlertNotification.jsx';
import Exercise09ResponsiveNavbar from './sections/Exercise09ResponsiveNavbar.jsx';
import Exercise10MiniDashboard from './sections/Exercise10MiniDashboard.jsx';

/**
 * Cada item registra um exercício na página única do board.
 * `Component` já traz a própria casca (ExerciseSection) com número e título.
 */
const exercises = [
  { id: 'ex01', number: '01', label: 'Button System', Component: Exercise01ButtonSystem },
  { id: 'ex02', number: '02', label: 'Badge + Avatar', Component: Exercise02BadgeAvatar },
  { id: 'ex03', number: '03', label: 'Profile Card', Component: Exercise03ProfileCard },
  { id: 'ex04', number: '04', label: 'Product Card', Component: Exercise04ProductCard },
  { id: 'ex05', number: '05', label: 'Login Form', Component: Exercise05LoginForm },
  { id: 'ex06', number: '06', label: 'KPI Card', Component: Exercise06KpiCard },
  { id: 'ex07', number: '07', label: 'Pricing Card', Component: Exercise07PricingCard },
  { id: 'ex08', number: '08', label: 'Alert / Notification', Component: Exercise08AlertNotification },
  { id: 'ex09', number: '09', label: 'Responsive Navbar', Component: Exercise09ResponsiveNavbar },
  { id: 'ex10', number: '10', label: 'Mini Dashboard', Component: Exercise10MiniDashboard },
];

function Hero() {
  return (
    <header className="max-w-3xl">
      <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-brand-700 uppercase ring-1 ring-brand-100 ring-inset">
        <span className="size-1.5 rounded-full bg-brand-500" aria-hidden="true" />
        Aula 04 · Prática
      </span>

      <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
        Component Board
      </h1>
      <p className="mt-4 text-base leading-relaxed text-slate-500 sm:text-lg">
        Dez exercícios de React + Tailwind construídos sobre os mesmos componentes:{' '}
        <span className="font-medium text-slate-700">Button</span>,{' '}
        <span className="font-medium text-slate-700">Badge</span>,{' '}
        <span className="font-medium text-slate-700">Avatar</span> e{' '}
        <span className="font-medium text-slate-700">InputField</span> reaparecem em cards,
        formulários e dashboard.
      </p>

      <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-sm">
        {[
          ['10', 'exercícios'],
          ['4', 'componentes base'],
          ['0', 'useState'],
        ].map(([value, label]) => (
          <div key={label}>
            <dt className="text-[10px] font-semibold tracking-[0.18em] text-slate-400 uppercase">
              {label}
            </dt>
            <dd className="mt-1 text-xl font-bold tracking-tight text-slate-900">{value}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}

/** Versão mobile da navegação: chips com scroll horizontal. */
function MobileNav({ items }) {
  return (
    <nav aria-label="Exercícios" className="-mx-4 mt-8 overflow-x-auto px-4 lg:hidden">
      <ul className="flex w-max gap-2">
        {items.map(({ id, number, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs whitespace-nowrap text-slate-600 shadow-sm transition-colors hover:border-brand-200 hover:text-brand-700"
            >
              <span className="font-mono text-[10px] text-slate-400">{number}</span>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function BoardApp() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 lg:px-8 lg:pt-14">
        <Hero />
        <MobileNav items={exercises} />

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[210px_minmax(0,1fr)] lg:gap-14">
          <Sidebar items={exercises} />

          <main className="flex min-w-0 flex-col gap-8">
            {exercises.map(({ id, Component }) => (
              <Component key={id} />
            ))}

            <footer className="border-t border-slate-200 pt-6 text-xs text-slate-400">
              Desenvolvido com React 19, Vite e Tailwind CSS v4 · Prática em Aula 04
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
