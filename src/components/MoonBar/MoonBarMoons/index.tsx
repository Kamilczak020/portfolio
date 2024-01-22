'use client';

import { Moon } from '@penumbra/components/Moon';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import { useTicker } from '@penumbra/hooks/ticker';
import style from './style.module.scss';

export default function MoonBarMoons() {
  if (typeof window === 'undefined') {
    return null;
  }

  const root = document?.getElementById('moon-bar-overlay') || document?.body;
  const [rotation, setRotation] = useState(0);
  const pathname = usePathname();

  const degRotPerSec = 2;
  const tickerTime = useTicker(500);

  useEffect(() => {
    setRotation((prev) => prev + 90);
  }, [pathname]);

  useEffect(() => {
    setRotation((prev) => prev + degRotPerSec / 2);
  }, [tickerTime]);

  return createPortal(
    <div className={style.moons}>
      <Moon phase={1} className={style.moon} rotation={rotation} />
      <Moon phase={2} className={style.moon} rotation={rotation} />
      <Moon phase={3} className={style.moon} rotation={rotation} />
      <Moon phase={4} className={style.moon} rotation={rotation} />
      <Moon phase={5} className={style.moon} rotation={rotation} />
    </div>,
    root,
  );
}
