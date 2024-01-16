'use client';

import React, { useState } from 'react';
import { MoonSquare } from '@penumbra/components/MoonBar/MoonSquare';
import { MoonCycle } from '@penumbra/components/Moon';
import style from './style.module.scss';

export function MoonBar(): JSX.Element {
  const [cycle, setCycle] = useState<MoonCycle>(1);

  return (
    <div className={style.moonBar}>
      <MoonSquare squareClassName={style.square} phase={1} cycle={cycle} />
      <MoonSquare squareClassName={style.square} phase={2} cycle={cycle} />
      <MoonSquare squareClassName={style.square} phase={3} cycle={cycle} />
      <MoonSquare squareClassName={style.square} phase={4} cycle={cycle} />
      <MoonSquare squareClassName={style.square} phase={5} cycle={cycle} />
    </div>
  );
}
