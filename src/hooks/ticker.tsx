import { useEffect, useState } from 'react';

export function useTicker(intervalMs: number) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);

  return time;
}
