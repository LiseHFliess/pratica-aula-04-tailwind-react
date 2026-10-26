import { cn } from '../lib/cn.js';

/**
 * Link de navegação reutilizável. `active` só troca a string de classes e
 * marca o item atual para leitores de tela com aria-current.
 */
export default function NavLink({ href = '#', children, active = false }) {
  return (
    <a
      href={href}
      aria-current={active ? 'page' : undefined}
      className={cn(
        'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
        'focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none',
        active
          ? 'bg-brand-50 text-brand-700'
          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
      )}
    >
      {children}
    </a>
  );
}
