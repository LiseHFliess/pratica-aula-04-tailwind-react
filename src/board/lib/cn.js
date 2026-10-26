/**
 * Junta classes condicionais sem dependência externa.
 * Evita `bg-${cor}-500` (o Tailwind não enxerga classes montadas em runtime):
 * aqui só concatenamos strings completas que já existem no código.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
