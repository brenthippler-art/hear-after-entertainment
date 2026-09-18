import { useEffect, useState } from 'react';

export function waveHeights(count, min, max) {
  return Array.from({ length: count }, (_, i) =>
    min + Math.round((Math.sin(i * 1.1) * 0.5 + 0.5) * (max - min))
  );
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}