'use client';

import React from 'react';
import classnames from 'classnames/bind';
import { NumberRange } from '@penumbra/util/types';
import Link from 'next/link';
import style from './style.module.scss';

const cx = classnames.bind(style);

type ProjectMenuItemProps = {
  title: string;
  slug: string;
  time: NumberRange;
  active: boolean;
};

export function ProjectMenuItem({ title, time, slug, active }: ProjectMenuItemProps) {
  const handleClick = () => {
    const element = document.getElementById('project-content');
    element?.scrollTo({ top: 0 });
    return undefined;
  };

  return (
    <Link
      href={`/home/${slug}`}
      className={cx(style.menuItem, { active })}
      scroll={false}
      onClick={handleClick}
    >
      <span className={style.time}>[{`${time.from} - ${time.to}`}]</span>
      <span>{title}</span>
    </Link>
  );
}
