import { cn } from '../lib/cn.js';

/**
 * Classes que valem para todas as variantes e tamanhos.
 *
 * - `focus-visible:` só aparece na navegação por teclado (Tab), não no clique.
 * - `disabled:pointer-events-none` impede que hover/active "vazem" no disabled.
 * - `active:translate-y-px` dá o feedback de "afundar" ao pressionar.
 */
const base = cn(
  'inline-flex items-center justify-center gap-2 rounded-xl font-semibold select-none',
  'transition-colors duration-150',
  'focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none',
  'active:translate-y-px',
  'disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
);

/**
 * Variantes mapeadas para strings COMPLETAS de classes.
 * Nunca `bg-${color}-600`: o Tailwind lê o código como texto e não gera
 * classes montadas em runtime.
 */
const variants = {
  primary:
    'bg-brand-600 text-white shadow-sm hover:bg-brand-500 focus-visible:ring-brand-500 active:bg-brand-700',
  secondary:
    'border border-slate-200 bg-white text-slate-700 shadow-sm hover:border-slate-300 hover:bg-slate-50 focus-visible:ring-slate-400 active:bg-slate-100',
  danger:
    'bg-rose-600 text-white shadow-sm hover:bg-rose-500 focus-visible:ring-rose-500 active:bg-rose-700',
  success:
    'bg-emerald-600 text-white shadow-sm hover:bg-emerald-500 focus-visible:ring-emerald-500 active:bg-emerald-700',
};

/** h-9 = 36px · h-11 = 44px (padrão do Figma) · h-[52px] = 52px */
const sizes = {
  sm: 'h-9 px-3.5 text-xs',
  md: 'h-11 px-5 text-[13px]',
  lg: 'h-[52px] px-7 text-sm',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  type = 'button',
  className,
  ...rest
}) {
  return (
    <button
      type={type}
      className={cn(base, variants[variant], sizes[size], fullWidth && 'w-full', className)}
      {...rest}
    >
      {children}
    </button>
  );
}
