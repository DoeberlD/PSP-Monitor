import { useState, useEffect } from 'react';

const POLL_INTERVAL = 60;

export function RefreshIndicator() {
  const [secondsLeft, setSecondsLeft] = useState(POLL_INTERVAL);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev <= 1 ? POLL_INTERVAL : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const progress = ((POLL_INTERVAL - secondsLeft) / POLL_INTERVAL) * 100;

  return (
    <div className="flex items-center gap-2 text-xs text-gray-500">
      <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span>{secondsLeft}s</span>
    </div>
  );
}
