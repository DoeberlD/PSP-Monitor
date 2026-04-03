import type { PSPProvider, NormalizedStatus } from '../types';
import { fetchStatuspageStatus } from './statuspage';
import { fetchAdyenStatus } from './adyen';

export async function fetchProviderStatus(provider: PSPProvider): Promise<NormalizedStatus> {
  switch (provider.apiType) {
    case 'statuspage_io':
      return fetchStatuspageStatus(provider);
    case 'custom':
      if (provider.id === 'adyen') return fetchAdyenStatus(provider);
      throw new Error(`No custom adapter for provider: ${provider.id}`);
    default:
      throw new Error(`Unsupported API type: ${provider.apiType}`);
  }
}
