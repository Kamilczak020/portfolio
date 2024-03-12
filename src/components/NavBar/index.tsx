import React from 'react';
import classnames from 'classnames';
import { NavItem } from '@penumbra/components/NavItem';
import style from './style.module.scss';

type NavBarProps = {
  className?: string;
};

export function NavBar({ className }: NavBarProps): JSX.Element {
  return (
    <div className={classnames(style.navBar, className)}>
      <div className={style.links}>
        <NavItem path="/home" title="Home" />
        <NavItem path="/bio" title="Bio" />
        <NavItem path="/blog" title="Blog" />
        <NavItem path="/contact" title="Contact" />
      </div>
    </div>
  );
}
