import { cn } from '../lib/cn.js';
import Button from './Button.jsx';
import NavLink from './NavLink.jsx';

/**
 * Estratégia: UMA estrutura com utilities responsivas, em vez de dois
 * componentes (DesktopNav/MobileNav).
 *
 * - `hidden md:flex`  → links e CTA aparecem a partir de 768px.
 * - `md:hidden`       → botão Menu aparece só abaixo de 768px.
 *
 * Nenhum JavaScript: o estado do menu fica para a próxima aula.
 */
export default function Navbar({
  items = [],
  ctaLabel = 'Começar',
  brand = 'BoardUI',
  className,
}) {
  return (
    <header
      className={cn(
        'flex min-h-[88px] items-center rounded-[18px] border border-slate-200 bg-white/80 px-4',
        'shadow-sm backdrop-blur sm:px-5',
        className,
      )}
    >
      <div className="flex w-full items-center justify-between gap-6">
        <a
          href="#ex09"
          className="flex items-center gap-2.5 rounded-lg focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none"
        >
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center rounded-xl bg-brand-600 text-sm font-bold text-white shadow-sm"
          >
            B
          </span>
          <span className="text-sm font-semibold tracking-tight text-slate-900">
            {brand}
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <NavLink key={item.label} href={item.href} active={item.active}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm">{ctaLabel}</Button>
        </div>

        <div className="md:hidden">
          <Button size="sm" variant="secondary" aria-label="Abrir menu">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}
