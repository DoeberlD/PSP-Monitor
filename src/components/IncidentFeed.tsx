import type { NormalizedIncident } from '../types';
import { IncidentItem } from './IncidentItem';

interface DashboardIncident extends NormalizedIncident {
  providerName: string;
  providerId: string;
}

interface IncidentFeedProps {
  incidents: DashboardIncident[];
}

export function IncidentFeed({ incidents }: IncidentFeedProps) {
  if (incidents.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <p className="text-sm">No active incidents across any provider.</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {incidents.map((incident) => (
        <IncidentItem key={`${incident.providerId}-${incident.id}`} incident={incident} />
      ))}
    </div>
  );
}
