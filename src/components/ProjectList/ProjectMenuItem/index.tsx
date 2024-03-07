import React from 'react';
import classnames from 'classnames/bind';
import { NumberRange } from '@penumbra/util/types';
import Link from 'next/link';
import { headers } from 'next/headers';
import { mustExist } from '@penumbra/util/exists';
import style from './style.module.scss';

const cx = classnames.bind(style);

type ProjectMenuItemProps = {
  title: string;
  slug: string;
  time: NumberRange;
};

export function ProjectMenuItem({ title, time, slug }: ProjectMenuItemProps) {
  const headersList = headers();
  const path = mustExist(headersList.get('x-pathname')).split('/').pop();

  return (
    <Link href={`/home/${slug}`} className={cx(style.menuItem, { active: path === slug })}>
      <span className={style.time}>[{`${time.from} - ${time.to}`}]</span>
      <span>{title}</span>
    </Link>
  );
}
