'use client';

import React from 'react';
import { Moon } from '@penumbra/components/Moon';
import { createPortal } from 'react-dom';
import style from './style.module.scss';

export default function MoonBarMoons() {
  if (typeof window === 'undefined') {
    return null;
  }

  const root = document?.getElementById('moon-bar-overlay') || document?.body;

  return createPortal(
    <div className={style.moons}>
      <Moon phase={1} className={style.moon} />
      <Moon phase={2} className={style.moon} />
      <Moon phase={3} className={style.moon} />
      <Moon phase={4} className={style.moon} />
      <Moon phase={5} className={style.moon} />
    </div>,
    root,
  );
}
