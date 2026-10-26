import Button from '../ui/Button.jsx';
import DemoRow from '../ui/DemoRow.jsx';
import ExerciseSection from '../ui/ExerciseSection.jsx';

const variants = [
  { value: 'primary', label: 'Primary' },
  { value: 'secondary', label: 'Secondary' },
  { value: 'danger', label: 'Danger' },
  { value: 'success', label: 'Success' },
];

export default function Exercise01ButtonSystem() {
  return (
    <ExerciseSection
      id="ex01"
      number="01"
      title="Button System"
      description="Um único Button.jsx atende todas as variantes e tamanhos. A prop variant escolhe uma string completa de classes; base, tamanho e largura são somados com o helper cn()."
      tags={['h-11', 'rounded-xl', 'hover:', 'focus-visible:', 'active:', 'disabled:']}
    >
      <div className="space-y-8">
        <DemoRow label="Variantes" hint="mesmo JSX, apenas o mapa de classes muda">
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {variants.map(({ value, label }) => (
              <Button key={value} variant={value}>
                {label}
              </Button>
            ))}
          </div>
        </DemoRow>

        <DemoRow label="Tamanhos" hint="sm · md (44px, padrão) · lg">
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm">Small</Button>
            <Button>Medium · 44px</Button>
            <Button size="lg">Large</Button>
          </div>
        </DemoRow>

        <DemoRow label="Full width e disabled" hint="disabled:opacity-50 + pointer-events-none">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col justify-center gap-3">
              <Button fullWidth>Full width</Button>
              <Button fullWidth variant="secondary">
                Full width secondary
              </Button>
            </div>
            <div className="flex flex-wrap content-center gap-3">
              <Button disabled>Disabled</Button>
              <Button disabled variant="secondary">
                Disabled
              </Button>
              <Button disabled variant="danger">
                Disabled
              </Button>
            </div>
          </div>
        </DemoRow>

        <p className="rounded-xl bg-white p-3 text-xs leading-relaxed text-slate-500 ring-1 ring-slate-200/70 ring-inset">
          Experimente: passe o mouse (hover), navegue com <kbd className="font-mono">Tab</kbd>{' '}
          (focus-visible), pressione (active) e compare com os botões desabilitados.
        </p>
      </div>
    </ExerciseSection>
  );
}
