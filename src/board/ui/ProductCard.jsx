import { cn } from '../lib/cn.js';
import Badge from './Badge.jsx';
import Button from './Button.jsx';

/**
 * ProductImage fica INLINE (não virou componente): é usado uma única vez, não
 * tem props próprias além do que o card já recebe e a única regra especial é o
 * `group-hover:` — que depende do `group` do card. Um componente extra só
 * adicionaria indireção sem ganho de reuso.
 */
export default function ProductCard({
  name,
  category,
  description,
  price,
  badge,
  badgeVariant = 'success',
  image,
  icon = '📦',
  ctaLabel = 'Ver produto',
}) {
  return (
    <article
      className={cn(
        'group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white',
        'shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl',
      )}
    >
      {/* área visual: `group-hover:` reage ao hover do card inteiro */}
      <div className="relative aspect-[4/3] overflow-hidden bg-linear-to-br from-brand-100 via-brand-50 to-white">
        {image ? (
          <img
            src={image}
            alt={name}
            className="size-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="grid size-full place-items-center text-5xl transition duration-500 group-hover:scale-110 group-hover:-rotate-3"
            aria-hidden="true"
          >
            {icon}
          </div>
        )}

        {badge && (
          <span className="absolute top-4 left-4">
            <Badge variant={badgeVariant}>{badge}</Badge>
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] font-semibold tracking-[0.14em] text-slate-400 uppercase">
          {category}
        </p>
        <h3 className="mt-1 text-base font-semibold tracking-tight text-slate-900">{name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-500">{description}</p>

        <div className="mt-4 flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
          <p className="text-lg font-bold tracking-tight text-slate-900">{price}</p>
          <Button size="sm" variant="secondary">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </article>
  );
}
