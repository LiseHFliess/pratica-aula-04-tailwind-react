import { cn } from '../lib/cn.js';
import Badge from './Badge.jsx';
import Button from './Button.jsx';

/**
 * `highlighted` só troca um conjunto de classes (borda, ring, sombra e CTA).
 * A estrutura do JSX é a mesma para qualquer plano — inclusive para o Free.
 */
export default function PricingCard({
  name,
  price,
  period = '/ month',
  features = [],
  highlighted = false,
  badge = 'Most popular',
  ctaLabel = 'Choose plan',
}) {
  return (
    <article
      className={cn(
        'relative flex h-full w-full flex-col rounded-3xl border p-6 transition sm:p-7',
        highlighted
          ? 'border-brand-300 bg-white shadow-xl shadow-brand-600/10 ring-1 ring-brand-200'
          : 'border-slate-200 bg-white shadow-sm hover:shadow-md',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-xs font-semibold tracking-[0.14em] text-slate-500 uppercase">
          {name}
        </h3>
        {highlighted && <Badge variant="brand">{badge}</Badge>}
      </div>

      <p className="mt-4 flex items-baseline gap-1.5">
        <span className="text-4xl font-extrabold tracking-tight text-slate-900">{price}</span>
        <span className="text-sm text-slate-400">{period}</span>
      </p>

      <ul className="mt-6 space-y-3 border-t border-slate-100 pt-6 text-sm text-slate-600">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 grid size-4.5 shrink-0 place-items-center rounded-full text-[10px] font-bold',
                highlighted ? 'bg-brand-100 text-brand-700' : 'bg-slate-100 text-slate-500',
              )}
            >
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Button fullWidth variant={highlighted ? 'primary' : 'secondary'}>
          {ctaLabel}
        </Button>
      </div>
    </article>
  );
}
