import { cn } from '../lib/cn.js';
import Avatar from './Avatar.jsx';
import Badge from './Badge.jsx';
import Button from './Button.jsx';

/**
 * Composição: ProfileCard usa Avatar, Badge e Button — nada é reescrito aqui.
 * `layout` troca apenas o eixo do flex e o alinhamento do texto.
 */
export default function ProfileCard({
  name,
  role,
  initials,
  category,
  description,
  avatarVariant = 'brand',
  categoryVariant = 'info',
  layout = 'vertical',
  primaryLabel = 'Seguir',
  secondaryLabel = 'Mensagem',
}) {
  const isVertical = layout === 'vertical';

  return (
    <article
      className={cn(
        'flex w-full max-w-[420px] flex-col rounded-3xl border border-slate-200 bg-white p-6',
        'shadow-sm transition-shadow duration-300 hover:shadow-lg',
        isVertical && 'text-center',
      )}
    >
      <div className={cn('flex gap-4', isVertical ? 'flex-col items-center' : 'items-center')}>
        <Avatar
          initials={initials}
          name={name}
          size="lg"
          variant={avatarVariant}
          className="shadow-sm"
        />

        <div className={cn('min-w-0 flex-1', isVertical && 'flex flex-col items-center')}>
          <h3 className="truncate text-base font-semibold tracking-tight text-slate-900">
            {name}
          </h3>
          <p className="mt-0.5 truncate text-xs text-slate-400">{role}</p>
          <div className="mt-2.5">
            <Badge variant={categoryVariant}>{category}</Badge>
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-slate-500">{description}</p>

      <div className="mt-5 flex gap-3">
        <Button variant="secondary" className="flex-1">
          {secondaryLabel}
        </Button>
        <Button className="flex-1">{primaryLabel}</Button>
      </div>
    </article>
  );
}
