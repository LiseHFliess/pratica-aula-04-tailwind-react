import DemoRow from '../ui/DemoRow.jsx';
import ExerciseSection from '../ui/ExerciseSection.jsx';
import ProductCard from '../ui/ProductCard.jsx';

const products = [
  {
    name: 'Teclado Mecânico 65%',
    category: 'Periféricos',
    description: 'Switches lineares, layout compacto e case de alumínio escovado.',
    price: 'R$ 749',
    badge: 'New',
    badgeVariant: 'success',
    icon: '⌨️',
  },
  {
    name: 'Monitor 27" 4K',
    category: 'Displays',
    description: 'Painel IPS com 99% sRGB e base ajustável para longas sessões.',
    price: 'R$ 2.890',
    badge: 'Últimas 3',
    badgeVariant: 'warning',
    icon: '🖥️',
  },
  {
    name: 'Headset Studio',
    category: 'Áudio',
    description: 'Drivers de 40mm, cancelamento ativo e espuma memory foam.',
    price: 'R$ 1.249',
    badge: 'Esgotado',
    badgeVariant: 'danger',
    icon: '🎧',
  },
];

export default function Exercise04ProductCard() {
  return (
    <ExerciseSection
      id="ex04"
      number="04"
      title="Product Card"
      description="Card de produto com hover puramente CSS: o card sobe (-translate-y-1) e a área visual reage via group-hover. Grade responsiva de 1 → 2 → 3 colunas."
      tags={['overflow-hidden', 'aspect-[4/3]', 'group', 'group-hover:*', 'duration-*', 'hover:shadow-xl']}
    >
      <div className="space-y-6">
        <DemoRow
          label="Grid responsivo"
          hint="1 coluna no mobile · 2 a partir de sm · 3 a partir de lg"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </div>
        </DemoRow>

        <p className="rounded-xl bg-white p-3 text-xs leading-relaxed text-slate-500 ring-1 ring-slate-200/70 ring-inset">
          A área visual usa o mesmo <span className="font-mono">group</span> do card:{' '}
          <span className="font-mono">group-hover:scale-110</span> amplia o emoji sem precisar de
          JavaScript. Passe o mouse em qualquer card para ver as duas transições juntas.
        </p>
      </div>
    </ExerciseSection>
  );
}
