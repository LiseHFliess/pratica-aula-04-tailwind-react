import DemoRow from '../ui/DemoRow.jsx';
import ExerciseSection from '../ui/ExerciseSection.jsx';
import ProfileCard from '../ui/ProfileCard.jsx';

/** Só os dados mudam entre os cards: a estrutura é sempre a mesma. */
const people = [
  {
    name: 'Eduardo Inocencio',
    role: 'Professor · React · SPA',
    initials: 'EI',
    category: 'Front-end',
    categoryVariant: 'info',
    avatarVariant: 'brand',
    description:
      'Ensina React na prática, com foco em componentização, props e composição de interfaces.',
  },
  {
    name: 'Marina Costa',
    role: 'Product Designer · Design System',
    initials: 'MC',
    category: 'Design',
    categoryVariant: 'warning',
    avatarVariant: 'violet',
    description:
      'Mantém o design system e traduz os componentes do Figma para especificações de UI.',
  },
];

export default function Exercise03ProfileCard() {
  return (
    <ExerciseSection
      id="ex03"
      number="03"
      title="Profile Card"
      description="Composição pura: o card não reimplementa botão, avatar nem badge. Dois cards são renderizados a partir de um array e a prop layout alterna entre vertical e horizontal."
      tags={['items-center', 'gap-*', 'flex-1', 'max-w-[420px]', 'shadow-sm']}
    >
      <div className="space-y-8">
        <DemoRow label="Dois cards, mesmos componentes" hint="renderizados com map() sobre um array">
          <div className="grid gap-5 xl:grid-cols-2">
            {people.map((person) => (
              <ProfileCard key={person.name} {...person} />
            ))}
          </div>
        </DemoRow>

        <DemoRow label='layout="horizontal"' hint="header em linha, texto alinhado à esquerda">
          <ProfileCard
            {...people[1]}
            layout="horizontal"
            primaryLabel="Convidar"
            secondaryLabel="Ver perfil"
            avatarVariant="emerald"
            categoryVariant="success"
          />
        </DemoRow>
      </div>
    </ExerciseSection>
  );
}
