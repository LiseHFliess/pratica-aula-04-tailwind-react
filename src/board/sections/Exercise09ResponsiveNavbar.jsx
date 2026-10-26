import Button from '../ui/Button.jsx';
import DemoRow from '../ui/DemoRow.jsx';
import ExerciseSection from '../ui/ExerciseSection.jsx';
import Navbar from '../ui/Navbar.jsx';
import NavLink from '../ui/NavLink.jsx';

const links = [
  { label: 'Home', href: '#ex09', active: true },
  { label: 'Componentes', href: '#ex09' },
  { label: 'Preços', href: '#ex09' },
  { label: 'Docs', href: '#ex09' },
];

/** Composição mobile: só logo + botão Menu, sem JavaScript. */
function MobilePreview() {
  return (
    <div className="mx-auto w-full max-w-sm rounded-[28px] border border-slate-200 bg-white p-3 shadow-sm">
      <div className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 px-3 py-2.5">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-lg bg-brand-600 text-xs font-bold text-white"
          >
            B
          </span>
          <span className="text-xs font-semibold tracking-tight text-slate-900">BoardUI</span>
        </div>
        <Button size="sm" variant="secondary">
          Menu
        </Button>
      </div>

      <nav aria-label="Mobile" className="mt-3 flex flex-wrap gap-1.5 px-1 pb-1">
        {links.map((link) => (
          <NavLink key={link.label} href={link.href} active={link.active}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default function Exercise09ResponsiveNavbar() {
  return (
    <ExerciseSection
      id="ex09"
      number="09"
      title="Responsive Navbar"
      description="Logo, links e CTA na mesma marcação. Abaixo de md (768px) os links somem (hidden) e só o botão Menu aparece (md:hidden); a partir de md, os links voltam (md:flex)."
      tags={['hidden', 'md:flex', 'md:hidden', 'justify-between', 'min-h-[88px]']}
    >
      <div className="space-y-6">
        <DemoRow label="Desktop (md+)" hint="redimensione a janela para ver a troca">
          <Navbar items={links} ctaLabel="Começar" />
        </DemoRow>

        <DemoRow label="Mobile (< md)" hint="segunda composição estática, sem abrir/fechar">
          <MobilePreview />
        </DemoRow>

        <div className="rounded-xl bg-white p-3 text-xs leading-relaxed text-slate-500 ring-1 ring-slate-200/70 ring-inset">
          <span className="font-mono text-slate-700">hidden md:flex</span> = display: none por
          padrão e display: flex a partir de 768px. Já{' '}
          <span className="font-mono text-slate-700">md:hidden</span> faz o inverso. Como as duas
          regras são aplicadas no mesmo elemento, não há duplicação de markup.
        </div>
      </div>
    </ExerciseSection>
  );
}
