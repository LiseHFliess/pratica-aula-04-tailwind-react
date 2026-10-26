import Avatar from '../ui/Avatar.jsx';
import Badge from '../ui/Badge.jsx';
import DemoRow from '../ui/DemoRow.jsx';
import ExerciseSection from '../ui/ExerciseSection.jsx';

const avatars = [
  { initials: 'EI', variant: 'brand', size: 'md' },
  { initials: 'UX', variant: 'violet', size: 'lg' },
  { initials: 'JS', variant: 'emerald', size: 'sm' },
  { initials: 'TS', variant: 'amber', size: 'md' },
  { initials: 'AI', variant: 'slate', size: 'sm' },
];

const badges = [
  { variant: 'info', label: 'Front-end' },
  { variant: 'success', label: 'New' },
  { variant: 'warning', label: 'Warning' },
  { variant: 'danger', label: 'Blocked' },
  { variant: 'brand', label: 'Pro' },
  { variant: 'neutral', label: 'Draft' },
];

export default function Exercise02BadgeAvatar() {
  return (
    <ExerciseSection
      id="ex02"
      number="02"
      title="Badge + Avatar"
      description="Dois componentes independentes e reaproveitáveis: Avatar recebe iniciais, variante de cor e tamanho; Badge é um pill com texto uppercase e tracking largo."
      tags={['size-*', 'rounded-full', 'grid', 'place-items-center', 'uppercase', 'tracking-*']}
    >
      <div className="space-y-8">
        <DemoRow label="Avatar · tamanhos" hint="sm 40px · md 56px · lg 64px — sem duplicar JSX">
          <div className="flex flex-wrap items-end gap-4">
            <Avatar initials="SM" size="sm" variant="slate" />
            <Avatar initials="MD" size="md" />
            <Avatar initials="LG" size="lg" variant="violet" />
            <Avatar initials="UX" variant="emerald" />
          </div>
        </DemoRow>

        <DemoRow label="Avatar · variantes">
          <div className="flex flex-wrap gap-3">
            {avatars.map((avatar) => (
              <Avatar key={avatar.initials} {...avatar} />
            ))}
          </div>
        </DemoRow>

        <DemoRow label="Badge · variantes" hint="fundo suave + texto forte + ring-1">
          <div className="flex flex-wrap gap-2">
            {badges.map(({ variant, label }) => (
              <Badge key={variant} variant={variant}>
                {label}
              </Badge>
            ))}
          </div>
        </DemoRow>

        <DemoRow label="Composição" hint="os dois componentes já conversam entre si">
          <div className="flex flex-wrap gap-3">
            {[
              { initials: 'EI', name: 'Eduardo Inocencio', role: 'Professor', badge: 'Front-end', variant: 'info' },
              { initials: 'MC', name: 'Marina Costa', role: 'Product Designer', badge: 'New', variant: 'success' },
            ].map((person) => (
              <div
                key={person.initials}
                className="flex flex-1 items-center gap-3 rounded-2xl bg-white p-3 ring-1 ring-slate-200/70 ring-inset"
              >
                <Avatar initials={person.initials} size="sm" name={person.name} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-800">{person.name}</p>
                  <p className="truncate text-xs text-slate-400">{person.role}</p>
                </div>
                <Badge variant={person.variant}>{person.badge}</Badge>
              </div>
            ))}
          </div>
        </DemoRow>
      </div>
    </ExerciseSection>
  );
}
