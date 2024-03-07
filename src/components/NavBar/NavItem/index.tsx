'use client';

import React from 'react';
import classnames from 'classnames/bind';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './style.module.scss';

const cx = classnames.bind(style);

type NavItemProps = {
  className?: string;
  path: string;
  title: string;
};

export function NavItem({ className, path, title }: NavItemProps): JSX.Element {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      // eslint-disable-next-line
      tabIndex={1}
      aria-label={`${path} link`}
      className={cx(style.link, className, { active: path === pathname })}
    >
      {title}
    </Link>
  );
}
