import Badge from '../ui/Badge.jsx';
import Button from '../ui/Button.jsx';
import DemoRow from '../ui/DemoRow.jsx';
import ExerciseSection from '../ui/ExerciseSection.jsx';
import InputField from '../ui/InputField.jsx';

/**
 * LoginForm estático: nenhum useState, onChange, validação ou submit funcional.
 * O foco do exercício é estrutura, acessibilidade e Tailwind.
 */
function LoginForm() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <Badge variant="brand">Acesso</Badge>
      <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">
        Bem-vindo de volta
      </h3>
      <p className="mt-1 text-sm text-slate-500">
        Entre com sua conta para continuar de onde parou.
      </p>

      <form className="mt-6 flex flex-col gap-4">
        <InputField
          id="login-email"
          label="E-mail"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          hint="Usamos apenas para identificar sua conta."
        />
        <InputField
          id="login-password"
          label="Senha"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
        />

        <div className="flex flex-wrap items-center justify-between gap-3">
          <label
            htmlFor="login-remember"
            className="flex cursor-pointer items-center gap-2 text-xs text-slate-600"
          >
            <input
              id="login-remember"
              name="login-remember"
              type="checkbox"
              defaultChecked
              className="size-4 rounded border-slate-300 text-brand-600 focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:ring-offset-0"
            />
            Remember me
          </label>

          <a
            href="#ex05"
            className="rounded text-xs font-semibold text-brand-600 transition-colors hover:text-brand-700 hover:underline focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none"
          >
            Forgot password?
          </a>
        </div>

        <Button type="button" fullWidth className="mt-1">
          Sign In
        </Button>
      </form>

      <p className="mt-5 text-center text-xs text-slate-400">
        Ainda não tem conta?{' '}
        <a
          href="#ex05"
          className="rounded font-semibold text-brand-600 hover:text-brand-700 hover:underline focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none"
        >
          Criar conta
        </a>
      </p>
    </div>
  );
}

/** Estados do campo: o erro vem só por prop, nada de state. */
function FieldStates() {
  return (
    <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-sm font-semibold text-slate-900">Estados do InputField</h3>
      <p className="mt-1 text-xs text-slate-400">
        Mesmo componente, aparência controlada por props.
      </p>

      <div className="mt-5 flex flex-col gap-5">
        <InputField
          id="state-default"
          label="Padrão"
          placeholder="you@example.com"
          hint="Dica opcional abaixo do campo."
        />
        <InputField
          id="state-filled"
          label="Preenchido"
          type="email"
          placeholder="you@example.com"
          defaultValue="marina@example.com"
        />
        <InputField
          id="state-error"
          label="E-mail"
          type="email"
          placeholder="you@example.com"
          error="E-mail inválido — confira o domínio."
          defaultValue="marina@"
        />
      </div>

      <p className="mt-6 rounded-xl bg-slate-50 p-3 font-mono text-[11px] leading-relaxed text-slate-500">
        {'<InputField id="email" label="E-mail" error="E-mail inválido" />'}
      </p>
    </div>
  );
}

export default function Exercise05LoginForm() {
  return (
    <ExerciseSection
      id="ex05"
      number="05"
      title="Login Form"
      description="Formulário estático com InputField reutilizado para e-mail e senha. O foco de teclado é sempre visível (ring) e o estado de erro chega apenas por prop."
      tags={['focus-visible:', 'ring-*', 'outline-none', 'placeholder:', 'h-[50px]']}
    >
      <div className="space-y-6">
        <DemoRow label="Formulário" hint="sem state, sem validação, sem submit funcional">
          <div className="flex justify-center">
            <LoginForm />
          </div>
        </DemoRow>

        <DemoRow label="Estados do campo" hint="erro apenas por prop">
          <div className="flex justify-center">
            <FieldStates />
          </div>
        </DemoRow>
      </div>
    </ExerciseSection>
  );
}
