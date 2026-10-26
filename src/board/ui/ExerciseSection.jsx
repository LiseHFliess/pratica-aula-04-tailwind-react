import { cn } from '../lib/cn.js';

/**
 * Casca de cada exercício: título, descrição, utilities usadas e a área de
 * preview. O `id` é o alvo dos links da sidebar (`href="#ex01"`).
 */
export default function ExerciseSection({
  id,
  number,
  title,
  description,
  tags = [],
  children,
}) {
  return (
    <section id={id} className="scroll-mt-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
        <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <span
              className={cn(
                'mt-0.5 grid size-10 shrink-0 place-items-center rounded-xl',
                'bg-brand-50 font-mono text-xs font-semibold text-brand-700',
                'ring-1 ring-brand-100 ring-inset',
              )}
              aria-hidden="true"
            >
              {number}
            </span>
            <div className="min-w-0">
              <h2 className="text-lg font-semibold tracking-tight text-slate-900">{title}</h2>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-500">{description}</p>
            </div>
          </div>
          <span className="hidden shrink-0 rounded-full bg-slate-100 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase sm:block">
            React + Tailwind
          </span>
        </header>

        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md bg-slate-50 px-2 py-1 font-mono text-[11px] text-slate-500 ring-1 ring-slate-200/70 ring-inset"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 rounded-2xl border border-slate-200/70 bg-slate-50/70 p-5 sm:p-6">
          {children}
        </div>
      </div>
    </section>
  );
}
