import DemoRow from '../ui/DemoRow.jsx';
import ExerciseSection from '../ui/ExerciseSection.jsx';
import PricingCard from '../ui/PricingCard.jsx';

const plans = [
  {
    name: 'Free',
    price: '$0',
    features: ['1 projeto', 'Analytics básico', 'Suporte da comunidade'],
    ctaLabel: 'Começar grátis',
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/ month',
    features: ['Projetos ilimitados', 'Advanced analytics', 'Priority support'],
    highlighted: true,
    badge: 'Most popular',
    ctaLabel: 'Assinar Pro',
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/ month',
    features: ['SSO e auditoria', 'SLA dedicado', 'Onboarding guiado'],
    ctaLabel: 'Falar com vendas',
  },
];

export default function Exercise07PricingCard() {
  return (
    <ExerciseSection
      id="ex07"
      number="07"
      title="Pricing Card"
      description="Plano + preço + lista de benefícios: os itens vêm de um array e são renderizados com map(). Só o Pro recebe destaque, e o card mantém a mesma estrutura nos três casos."
      tags={['features.map()', 'space-y-3', 'w-full', 'highlighted', 'shadow-xl']}
    >
      <DemoRow label="Free · Pro · Enterprise" hint="apenas o Pro tem highlighted">
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </DemoRow>
    </ExerciseSection>
  );
}
