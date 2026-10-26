import DemoRow from '../ui/DemoRow.jsx';
import ExerciseSection from '../ui/ExerciseSection.jsx';
import DashboardOverview from './dashboard/DashboardOverview.jsx';

export default function Exercise10MiniDashboard() {
  return (
    <ExerciseSection
      id="ex10"
      number="10"
      title="Mini Dashboard"
      description="Composição final: header com CTA, três KPIs gerados por map(), um card de performance (2/3) e um de atividade (1/3). O dark mode usa apenas classes dark: — o mesmo componente, envolto em um container .dark."
      tags={['grid', 'lg:grid-cols-3', 'map()', 'lg:col-span-2', 'dark:']}
    >
      <div className="space-y-6">
        <DemoRow label="Light" hint="1 coluna no mobile · 3 KPIs a partir de md">
          <DashboardOverview />
        </DemoRow>

        <DemoRow label="Dark" hint="mesmo componente dentro de um container .dark">
          <div className="dark rounded-2xl">
            <DashboardOverview />
          </div>
        </DemoRow>
      </div>
    </ExerciseSection>
  );
}
