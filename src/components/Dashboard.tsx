import { useDashboard } from '../hooks/useDashboard';
import { SummaryBar } from './SummaryBar';
import { ProviderCard } from './ProviderCard';
import { IncidentFeed } from './IncidentFeed';
import { RefreshIndicator } from './RefreshIndicator';

export function Dashboard() {
  const { providerStates, allIncidents, summary } = useDashboard();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold tracking-tight">PayPulse</h1>
            <p className="text-xs text-gray-500">PSP Status Aggregator</p>
          </div>
          <RefreshIndicator />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-6 space-y-6">
        <SummaryBar summary={summary} />

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {providerStates.map((ps) => (
              <ProviderCard
                key={ps.providerId}
                state={ps}
                providerId={ps.providerId}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-3 text-gray-300">Active Incidents</h2>
          <IncidentFeed incidents={allIncidents} />
        </section>
      </main>

      <footer className="border-t border-gray-800 px-6 py-4 mt-auto">
        <div className="max-w-6xl mx-auto text-center text-xs text-gray-600">
          PayPulse aggregates public status pages. Not affiliated with any listed provider.
        </div>
      </footer>
    </div>
  );
}
