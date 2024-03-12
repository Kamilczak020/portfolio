'use client';

import React from 'react';
import classnames from 'classnames/bind';
import { NumberRange } from '@penumbra/util/types';
import Link from 'next/link';
import { exists } from '@penumbra/util/exists';
import style from './style.module.scss';

const cx = classnames.bind(style);

type ProjectMenuItemProps = {
  title: string;
  slug: string;
  time?: NumberRange;
  active: boolean;
  className?: string;
};

export function ProjectMenuItem({ title, time, slug, active, className }: ProjectMenuItemProps) {
  const handleClick = () => {
    const element = document.getElementById('project-content');
    element?.scrollTo({ top: 0 });
    return undefined;
  };

  return (
    <Link
      href={`/home/${slug}`}
      className={cx(style.menuItem, className, { active })}
      scroll={false}
      onClick={handleClick}
    >
      {exists(time) && <span className={style.time}>[{`${time.from} - ${time.to}`}]</span>}
      <span>{title}</span>
    </Link>
  );
}
