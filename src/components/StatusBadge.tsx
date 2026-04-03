import { getStatusBgClass, getStatusLabel } from '../utils/statusColors';

interface StatusBadgeProps {
  status: string;
  size?: 'sm' | 'md';
  showLabel?: boolean;
}

export function StatusBadge({ status, size = 'md', showLabel = true }: StatusBadgeProps) {
  const dotSize = size === 'sm' ? 'w-2 h-2' : 'w-3 h-3';
  const textSize = size === 'sm' ? 'text-xs' : 'text-sm';

  return (
    <span className="inline-flex items-center gap-2">
      <span className={`${dotSize} rounded-full ${getStatusBgClass(status)}`} />
      {showLabel && (
        <span className={`${textSize} text-gray-300`}>{getStatusLabel(status)}</span>
      )}
    </span>
  );
}
