import { cn } from '../lib/cn.js';
import Button from './Button.jsx';

/**
 * Cada variante é um trio: fundo bem claro + texto forte + ícone.
 * O título e o glifo (✓ ! ✕ i) garantem que o alerta continue legível mesmo
 * sem perceber a cor — nada depende só de cor.
 */
const variants = {
  success: {
    wrapper: 'border-emerald-100 bg-emerald-50',
    icon: 'bg-emerald-600/10 text-emerald-700',
    title: 'text-emerald-900',
    text: 'text-emerald-800/80',
    glyph: '✓',
  },
  warning: {
    wrapper: 'border-amber-100 bg-amber-50',
    icon: 'bg-amber-500/15 text-amber-700',
    title: 'text-amber-900',
    text: 'text-amber-800/80',
    glyph: '!',
  },
  error: {
    wrapper: 'border-rose-100 bg-rose-50',
    icon: 'bg-rose-600/10 text-rose-700',
    title: 'text-rose-900',
    text: 'text-rose-800/80',
    glyph: '✕',
  },
  info: {
    wrapper: 'border-sky-100 bg-sky-50',
    icon: 'bg-sky-600/10 text-sky-700',
    title: 'text-sky-900',
    text: 'text-sky-800/80',
    glyph: 'i',
  },
};

export default function Alert({ variant = 'info', title, children, actionLabel, onAction }) {
  const tone = variants[variant] ?? variants.info;

  return (
    <div
      role="status"
      className={cn('flex items-start gap-3.5 rounded-2xl border p-4', tone.wrapper)}
    >
      <span
        aria-hidden="true"
        className={cn(
          'grid size-10 shrink-0 place-items-center rounded-xl text-base font-bold',
          tone.icon,
        )}
      >
        {tone.glyph}
      </span>

      <div className="min-w-0 flex-1">
        <p className={cn('text-sm font-semibold', tone.title)}>{title}</p>
        {children && (
          <div className={cn('mt-0.5 text-sm leading-relaxed', tone.text)}>{children}</div>
        )}
      </div>

      {actionLabel && (
        <Button
          size="sm"
          variant="secondary"
          onClick={onAction}
          className="shrink-0 border-white/70 bg-white/80 text-slate-700 hover:bg-white"
        >
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
