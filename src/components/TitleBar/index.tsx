import React from 'react';
import { NavBar } from '@penumbra/components/NavBar';
import style from './style.module.scss';

export function TitleBar(): JSX.Element {
  return (
    <div className={style.titleBar}>
      <div className={style.titleWrapper}>
        <h1 className={style.title}>Penumbra</h1>
        <h5 className={style.description}>A one-man infrastructure and backend development shop</h5>
      </div>
      <NavBar className={style.nav} />
    </div>
  );
}
