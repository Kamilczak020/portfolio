import React from 'react';
import { NavItem } from '@penumbra/components/NavBar/NavItem';
import style from './style.module.scss';

export function NavBar(): JSX.Element {
  return (
    <div className={style.navBar}>
      <NavItem path="/home" title="Home" />
      <NavItem path="/about-me" title="Bio" />
      <NavItem path="/blog" title="Blog" />
      <NavItem path="/contact" title="Contact" />
    </div>
  );
}
