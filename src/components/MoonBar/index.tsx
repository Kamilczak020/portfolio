'use client';

import React, { useRef } from 'react';
import { MoonBarNav } from '@penumbra/components/MoonBar/MoonBarNav';
import { Square } from '@penumbra/components/MoonBar/Square';
import { MoonBarMoons } from '@penumbra/components/MoonBar/MoonBarMoons';
import style from './style.module.scss';

export function MoonBar(): JSX.Element {
  const moonBarRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={moonBarRef} className={style.moonBar}>
      <Square wrapperClassName={style.wrapper} squareClassName={style.square} />
      <Square wrapperClassName={style.wrapper} />
      <Square wrapperClassName={style.wrapper} />
      <Square wrapperClassName={style.wrapper} />
      <Square wrapperClassName={style.wrapper} />
      <MoonBarNav />
      <MoonBarMoons />
    </div>
  );
}
