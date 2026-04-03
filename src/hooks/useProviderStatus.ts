import { useState, useEffect, useCallback, useRef } from 'react';
import type { PSPProvider, ProviderState } from '../types';
import { fetchProviderStatus } from '../adapters';

const POLL_INTERVAL = 60_000;

export function useProviderStatus(provider: PSPProvider): ProviderState & { refresh: () => void } {
  const [state, setState] = useState<ProviderState>({
    data: null,
    loading: true,
    error: null,
    lastFetched: null,
  });
  const mountedRef = useRef(true);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchProviderStatus(provider);
      if (mountedRef.current) {
        setState({ data, loading: false, error: null, lastFetched: new Date() });
      }
    } catch (err) {
      if (mountedRef.current) {
        setState((prev) => ({
          ...prev,
          loading: false,
          error: err instanceof Error ? err.message : 'Failed to fetch',
        }));
      }
    }
  }, [provider]);

  useEffect(() => {
    mountedRef.current = true;
    fetchData();
    const interval = setInterval(fetchData, POLL_INTERVAL);
    return () => {
      mountedRef.current = false;
      clearInterval(interval);
    };
  }, [fetchData]);

  return { ...state, refresh: fetchData };
}
