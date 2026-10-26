import DemoRow from '../ui/DemoRow.jsx';
import ExerciseSection from '../ui/ExerciseSection.jsx';
import KpiCard from '../ui/KpiCard.jsx';

const metrics = [
  {
    label: 'Revenue',
    value: 'R$ 128.4k',
    change: '+12.8%',
    comparison: 'vs previous period',
    trend: 'positive',
    icon: '💸',
  },
  {
    label: 'Churn',
    value: '2.1%',
    change: '+0.6%',
    comparison: 'vs previous period',
    trend: 'negative',
    icon: '📉',
  },
  {
    label: 'Tickets',
    value: '312',
    change: '0.0%',
    comparison: 'vs previous period',
    trend: 'neutral',
    icon: '🎧',
  },
];

export default function Exercise06KpiCard() {
  return (
    <ExerciseSection
      id="ex06"
      number="06"
      title="KPI Card"
      description="Indicador de dashboard com hierarquia clara: label pequena, valor grande, ícone em container arredondado e um chip semântico controlado por trend (positive, negative, neutral)."
      tags={['justify-between', 'text-4xl', 'font-extrabold', 'rounded-*', 'shadow-*', 'trend']}
    >
      <DemoRow label="Três tendências" hint="muda só a aparência do indicador">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {metrics.map((metric) => (
            <KpiCard key={metric.label} {...metric} />
          ))}
        </div>
      </DemoRow>
    </ExerciseSection>
  );
}
