import React from 'react';
import classnames from 'classnames/bind';
import { NumberRange } from '@penumbra/util/types';
import style from './style.module.scss';

const cx = classnames.bind(style);

type ProjectMenuItemProps = {
  id: string;
  title: string;
  time: NumberRange;
  active?: boolean;
  onClick?: (projectId: string) => void;
};

export function ProjectMenuItem({
  id,
  title,
  time,
  active = false,
  onClick = () => null,
}: ProjectMenuItemProps) {
  const handleClick = () => {
    onClick(id);
  };

  return (
    // eslint-disable-next-line
    <a role="button" onClick={handleClick} tabIndex={2} className={cx(style.menuItem, { active })}>
      <span className={style.time}>[{`${time.from} - ${time.to}`}]</span>
      <span>{title}</span>
    </a>
  );
}
