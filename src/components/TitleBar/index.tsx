import React from 'react';
import { NavBar } from '@penumbra/components/NavBar';
import { italiana } from '@penumbra/app/fonts';
import classnames from 'classnames';
import { BurgerMenu } from '@penumbra/components/BurgerMenu';
import style from './style.module.scss';

export function TitleBar(): JSX.Element {
  return (
    <div className={style.titleBar}>
      <div className={style.titleWrapper}>
        <h1 className={classnames(style.title, italiana.className)}>Penumbra</h1>
        <h5 className={style.description}>A one-man infrastructure and backend development shop</h5>
      </div>
      <BurgerMenu className={style.burger} />
      <NavBar className={style.nav} />
    </div>
  );
}
