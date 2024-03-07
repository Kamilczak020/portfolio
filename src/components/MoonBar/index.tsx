import React from 'react';
import { Square } from '@penumbra/components/MoonBar/Square';
import dynamic from 'next/dynamic';
import style from './style.module.scss';

const MoonBarNav = dynamic(() => import('./MoonBarNav'), { ssr: false });
const MoonBarMoons = dynamic(() => import('./MoonBarMoons'), { ssr: false });

export function MoonBar() {
  return (
    <div className={style.moonBar}>
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
