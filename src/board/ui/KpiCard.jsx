import { cn } from '../lib/cn.js';

/**
 * A prop `trend` troca apenas o par (tom do ícone + cor do indicador).
 * O texto (`change`, `comparison`) vem por props, então o mesmo card serve
 * para qualquer métrica.
 */
const trends = {
  positive: {
    icon: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
    chip: 'bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/20',
    arrow: '↑',
  },
  negative: {
    icon: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400',
    chip: 'bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-500/10 dark:text-rose-300 dark:ring-rose-500/20',
    arrow: '↓',
  },
  neutral: {
    icon: 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-300',
    chip: 'bg-slate-100 text-slate-600 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700',
    arrow: '→',
  },
};

export default function KpiCard({
  label,
  value,
  change,
  comparison = 'vs previous period',
  icon = '📈',
  trend = 'positive',
}) {
  const tone = trends[trend] ?? trends.neutral;

  return (
    <article
      className={cn(
        'flex h-full min-h-[200px] w-full flex-col justify-between rounded-3xl p-6',
        'border border-slate-200 bg-white shadow-sm',
        'dark:border-slate-800 dark:bg-slate-900 dark:shadow-none',
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-[10px] font-semibold tracking-[0.16em] text-slate-400 uppercase dark:text-slate-500">
            {label}
          </p>
          <p className="mt-2 truncate text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {value}
          </p>
        </div>
        <span
          aria-hidden="true"
          className={cn('grid size-12 shrink-0 place-items-center rounded-2xl text-xl', tone.icon)}
        >
          {icon}
        </span>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <span
          className={cn(
            'inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-semibold ring-1 ring-inset',
            tone.chip,
          )}
        >
          <span aria-hidden="true">{tone.arrow}</span>
          {change}
        </span>
        <span className="text-[11px] text-slate-400 dark:text-slate-500">{comparison}</span>
      </div>
    </article>
  );
}
