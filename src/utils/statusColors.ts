import type { ComponentStatus, OverallIndicator } from '../types';

type StatusKey = OverallIndicator | ComponentStatus | 'unknown';

const STATUS_COLORS: Record<StatusKey, string> = {
  operational: '#22c55e',
  degraded: '#eab308',
  degraded_performance: '#eab308',
  partial_outage: '#f97316',
  major_outage: '#ef4444',
  unknown: '#6b7280',
};

const STATUS_BG_COLORS: Record<StatusKey, string> = {
  operational: 'bg-green-500',
  degraded: 'bg-yellow-500',
  degraded_performance: 'bg-yellow-500',
  partial_outage: 'bg-orange-500',
  major_outage: 'bg-red-500',
  unknown: 'bg-gray-500',
};

const STATUS_LABELS: Record<StatusKey, string> = {
  operational: 'Operational',
  degraded: 'Degraded',
  degraded_performance: 'Degraded Performance',
  partial_outage: 'Partial Outage',
  major_outage: 'Major Outage',
  unknown: 'Unknown',
};

export function getStatusColor(status: string): string {
  return STATUS_COLORS[status as StatusKey] ?? STATUS_COLORS.unknown;
}

export function getStatusBgClass(status: string): string {
  return STATUS_BG_COLORS[status as StatusKey] ?? STATUS_BG_COLORS.unknown;
}

export function getStatusLabel(status: string): string {
  return STATUS_LABELS[status as StatusKey] ?? STATUS_LABELS.unknown;
}

export function getImpactColor(impact: string): string {
  switch (impact) {
    case 'critical': return '#ef4444';
    case 'major': return '#f97316';
    case 'minor': return '#eab308';
    default: return '#6b7280';
  }
}

export function getImpactBgClass(impact: string): string {
  switch (impact) {
    case 'critical': return 'bg-red-500';
    case 'major': return 'bg-orange-500';
    case 'minor': return 'bg-yellow-500';
    default: return 'bg-gray-500';
  }
}
