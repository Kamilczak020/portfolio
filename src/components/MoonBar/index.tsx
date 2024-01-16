'use client';

import React, { useRef } from 'react';
import { MoonSquare } from '@penumbra/components/MoonBar/MoonSquare';
import { MoonBarOverlay } from '@penumbra/components/MoonBar/MoonBarOverlay';
import style from './style.module.scss';

export function MoonBar(): JSX.Element {
  const moonBarRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={moonBarRef} className={style.moonBar}>
      <MoonSquare phase={1} wrapperClassName={style.wrapper} squareClassName={style.square} />
      <MoonSquare phase={2} wrapperClassName={style.wrapper} />
      <MoonSquare phase={3} wrapperClassName={style.wrapper} />
      <MoonSquare phase={4} wrapperClassName={style.wrapper} />
      <MoonSquare phase={5} wrapperClassName={style.wrapper} />
      <MoonBarOverlay moonBarRef={moonBarRef} />
    </div>
  );
}
