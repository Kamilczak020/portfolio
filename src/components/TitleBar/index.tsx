import React from 'react';
import style from './style.module.scss';

export function TitleBar(): JSX.Element {
  return (
    <div className={style.titleBar}>
      <h1 className={style.title}>Penumbra</h1>
      <h5 className={style.description}>A one-man infrastructure and backend development shop</h5>
    </div>
  );
}
