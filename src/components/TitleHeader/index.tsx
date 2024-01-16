import React from 'react';
import style from './style.module.scss';

export function TitleHeader(): JSX.Element {
  return (
    <div className={style.header}>
      <h1 className={style.title}>Penumbra</h1>
      <h5 className={style.description}>An one-man infrastructure and backend development shop</h5>
    </div>
  );
}
