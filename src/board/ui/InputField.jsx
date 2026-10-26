import { cn } from '../lib/cn.js';

/**
 * InputField controla apenas apresentação: recebe `id`, `label`, `type`,
 * `placeholder` e, opcionalmente, uma mensagem de erro por prop (sem state).
 *
 * Acessibilidade: o <label> aponta para o input via htmlFor/id, e o erro é
 * ligado ao campo com aria-describedby + aria-invalid.
 */
export default function InputField({
  id,
  label,
  type = 'text',
  placeholder,
  error,
  hint,
  autoComplete,
  className,
  ...rest
}) {
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label htmlFor={id} className="text-xs font-semibold text-slate-700">
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
        {...rest}
        className={cn(
          'h-[50px] w-full rounded-xl border bg-white px-4 text-sm text-slate-900',
          'shadow-sm transition placeholder:text-slate-400',
          'focus-visible:ring-2 focus-visible:outline-none',
          error
            ? 'border-rose-300 focus-visible:border-rose-400 focus-visible:ring-rose-500/25'
            : 'border-slate-200 hover:border-slate-300 focus-visible:border-brand-400 focus-visible:ring-brand-500/25',
        )}
      />

      {error ? (
        <p id={`${id}-error`} className="text-xs font-medium text-rose-600">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-xs text-slate-400">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
