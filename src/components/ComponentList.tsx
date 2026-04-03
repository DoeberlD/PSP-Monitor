import type { NormalizedComponent } from '../types';
import { StatusBadge } from './StatusBadge';

interface ComponentListProps {
  components: NormalizedComponent[];
}

export function ComponentList({ components }: ComponentListProps) {
  if (components.length === 0) return null;

  return (
    <div className="mt-3 space-y-1.5 border-t border-gray-700 pt-3">
      {components.map((component) => (
        <div key={component.id} className="flex items-center justify-between text-sm">
          <span className="text-gray-400 truncate mr-2">{component.name}</span>
          <StatusBadge status={component.status} size="sm" showLabel={false} />
        </div>
      ))}
    </div>
  );
}
