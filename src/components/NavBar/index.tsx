import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import style from './style.module.scss';

type NavBarProps = {
  className?: string;
};

export function NavBar({ className }: NavBarProps): JSX.Element {
  return (
    <div className={style.navBar}>
      <Link className={classnames(style.link, className)} href="/home">
        Home
      </Link>
      <Link className={classnames(style.link, className)} href="/about-me">
        Bio
      </Link>
      <Link className={classnames(style.link, className)} href="/blog">
        Blog
      </Link>
      <Link className={classnames(style.link, className)} href="/contact">
        Contact
      </Link>
    </div>
  );
}
