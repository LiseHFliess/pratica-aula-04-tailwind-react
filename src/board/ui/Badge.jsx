import { cn } from '../lib/cn.js';

/** Fundo suave (50/100) + texto forte (600/700) mantêm o contraste legível. */
const variants = {
  info: 'bg-sky-50 text-sky-700 ring-sky-200',
  success: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  warning: 'bg-amber-50 text-amber-700 ring-amber-200',
  danger: 'bg-rose-50 text-rose-700 ring-rose-200',
  brand: 'bg-brand-50 text-brand-700 ring-brand-200',
  neutral: 'bg-slate-100 text-slate-600 ring-slate-200',
};

export default function Badge({ children, variant = 'neutral', className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-1',
        'text-[10px] font-bold tracking-[0.08em] uppercase',
        'ring-1 ring-inset',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
