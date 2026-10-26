import { cn } from '../lib/cn.js';

/** sm = 40px · md = 56px (base do Figma) · lg = 64px (usado no ProfileCard) */
const sizes = {
  sm: 'size-10 text-[11px]',
  md: 'size-14 text-sm',
  lg: 'size-16 text-base',
};

const variants = {
  brand:
    'bg-brand-100 text-brand-700 ring-brand-200 dark:bg-brand-500/15 dark:text-brand-300 dark:ring-brand-500/25',
  slate:
    'bg-slate-100 text-slate-700 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700',
  violet:
    'bg-violet-100 text-violet-700 ring-violet-200 dark:bg-violet-500/15 dark:text-violet-300 dark:ring-violet-500/25',
  emerald:
    'bg-emerald-100 text-emerald-700 ring-emerald-200 dark:bg-emerald-500/15 dark:text-emerald-300 dark:ring-emerald-500/25',
  amber:
    'bg-amber-100 text-amber-700 ring-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:ring-amber-500/25',
};

export default function Avatar({
  initials,
  variant = 'brand',
  size = 'md',
  name,
  className,
}) {
  return (
    <span
      role="img"
      aria-label={name ? `Avatar de ${name}` : `Avatar ${initials}`}
      className={cn(
        'grid shrink-0 place-items-center rounded-full font-bold tracking-wide select-none',
        'ring-1 ring-inset',
        sizes[size],
        variants[variant],
        className,
      )}
    >
      {initials}
    </span>
  );
}
