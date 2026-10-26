/**
 * Agrupa uma demonstração com rótulo curto. Usado dentro dos exercícios para
 * deixar claro o que cada bloco de preview está mostrando.
 */
export default function DemoRow({ label, hint, children }) {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="text-[11px] font-semibold tracking-[0.14em] text-slate-500 uppercase">
          {label}
        </h3>
        {hint && <p className="text-xs text-slate-400">{hint}</p>}
      </div>
      {children}
    </div>
  );
}
