/**
 * Navegação lateral (desktop). Os links são âncoras puras: nada de estado nem
 * router, o que mantém a página única e o histórico de commits simples.
 */
export default function Sidebar({ items }) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-8">
        <p className="px-3 font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase">
          Exercícios
        </p>
        <nav aria-label="Exercícios" className="mt-3 flex flex-col gap-1">
          {items.map(({ id, number, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-500 transition-colors hover:bg-white hover:text-slate-900 hover:shadow-sm"
            >
              <span className="font-mono text-[11px] text-slate-400 transition-colors group-hover:text-brand-600">
                {number}
              </span>
              <span className="truncate">{label}</span>
            </a>
          ))}
        </nav>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-slate-400 uppercase">
            Stack
          </p>
          <p className="mt-2 text-xs leading-relaxed text-slate-500">
            React 19 · Vite · Tailwind CSS v4. Sem `useState`, sem router, sem libs de UI.
          </p>
        </div>
      </div>
    </aside>
  );
}
