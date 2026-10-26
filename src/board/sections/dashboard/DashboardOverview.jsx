import { cn } from '../../lib/cn.js';
import Avatar from '../../ui/Avatar.jsx';
import Badge from '../../ui/Badge.jsx';
import Button from '../../ui/Button.jsx';
import KpiCard from '../../ui/KpiCard.jsx';

/**
 * Por que estes blocos ficaram no mesmo arquivo?
 * Eles só existem dentro deste dashboard (não são reutilizados em outro lugar),
 * então manter DashboardHeader/KpiGrid/PerformanceCard/ActivityCard aqui evita
 * arquivos de uma linha. O que É reutilizado (KpiCard, Button, Badge, Avatar)
 * continua em src/board/ui.
 */

const metrics = [
  {
    label: 'Revenue',
    value: 'R$ 128.4k',
    change: '+12.8%',
    trend: 'positive',
    icon: '💸',
  },
  {
    label: 'Orders',
    value: '1,842',
    change: '+4.2%',
    trend: 'positive',
    icon: '🧾',
  },
  {
    label: 'Conv.',
    value: '4.7%',
    change: '-0.6%',
    trend: 'negative',
    icon: '🎯',
  },
];

const activities = [
  { initials: 'MC', name: 'Marina Costa', action: 'assinou o plano Pro', time: '2 min', variant: 'violet' },
  { initials: 'RS', name: 'Rafael Souza', action: 'abriu um ticket', time: '18 min', variant: 'emerald' },
  { initials: 'AL', name: 'Ana Lima', action: 'exportou o relatório', time: '1 h', variant: 'amber' },
];

/** Receita por mês — barras estáticas em divs, sem lib de gráficos. */
const bars = [42, 58, 36, 72, 64, 88, 54, 96, 78, 60, 84, 100];

const surface =
  'rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900';

function DashboardHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
          Overview
        </h3>
        <p className="text-xs text-slate-400 dark:text-slate-500">
          Últimos 30 dias · atualizado há 2 min
        </p>
      </div>

      <Button
        size="sm"
        variant="secondary"
        className="dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
      >
        <span aria-hidden="true">⬇</span>
        Export
      </Button>
    </div>
  );
}

function KpiGrid() {
  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => (
        <KpiCard key={metric.label} {...metric} />
      ))}
    </div>
  );
}

function PerformanceCard() {
  return (
    <article className={cn(surface, 'p-5 lg:col-span-2')}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Performance</h4>
          <p className="text-xs text-slate-400 dark:text-slate-500">Receita por mês</p>
        </div>
        <Badge variant="success">+18%</Badge>
      </div>

      <div className="mt-6 flex h-40 items-end gap-1.5 sm:gap-2">
        {bars.map((height, index) => (
          <div
            key={index}
            style={{ height: `${height}%` }}
            className="flex-1 rounded-t-md bg-brand-200 transition-colors duration-200 hover:bg-brand-500 dark:bg-brand-500/30 dark:hover:bg-brand-400"
          />
        ))}
      </div>

      <div className="mt-3 flex justify-between text-[10px] tracking-wider text-slate-400 uppercase dark:text-slate-600">
        <span>Jan</span>
        <span>Jun</span>
        <span>Dez</span>
      </div>
    </article>
  );
}

function ActivityCard() {
  return (
    <article className={cn(surface, 'flex flex-col p-5')}>
      <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Activity</h4>

      <ul className="mt-4 flex-1 space-y-3.5">
        {activities.map((activity) => (
          <li key={activity.name} className="flex items-center gap-3">
            <Avatar
              initials={activity.initials}
              name={activity.name}
              size="sm"
              variant={activity.variant}
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-slate-700 dark:text-slate-200">
                {activity.name}
              </p>
              <p className="truncate text-[11px] text-slate-400 dark:text-slate-500">
                {activity.action}
              </p>
            </div>
            <span className="shrink-0 text-[10px] text-slate-400 dark:text-slate-600">
              {activity.time}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#ex10"
        className="mt-4 rounded-lg text-xs font-semibold text-brand-600 transition-colors hover:text-brand-700 hover:underline focus-visible:ring-2 focus-visible:ring-brand-500/40 focus-visible:outline-none dark:text-brand-300 dark:hover:text-brand-200"
      >
        Ver tudo
      </a>
    </article>
  );
}

export default function DashboardOverview() {
  return (
    <div className="rounded-2xl bg-slate-100/70 p-4 sm:p-6 dark:bg-slate-950">
      <DashboardHeader />
      <KpiGrid />

      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <PerformanceCard />
        <ActivityCard />
      </div>
    </div>
  );
}
