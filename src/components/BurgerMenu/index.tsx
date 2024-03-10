'use client';

import React, { useCallback, useState } from 'react';
import classnames from 'classnames/bind';
import style from './style.module.scss';

const cx = classnames.bind(style);

type BurgerMenuProps = {
  className?: string;
};

export function BurgerMenu({ className }: BurgerMenuProps) {
  const [open, setOpen] = useState(false);
  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
    return undefined;
  }, []);

  return (
    // eslint-disable-next-line
    <div className={cx(style.burgerMenu, className, { active: open })} onClick={handleClick}>
      <svg className={style.burger} viewBox="0 0 100 100">
        <defs>
          <filter id="gooeyness">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="gooeyness"
            />
            <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
          </filter>
        </defs>
        <path className={cx(style.line, style.line1)} d="M 30,35 H 70 " />
        <path className={cx(style.line, style.line2)} d="M 50,50 H 30 L 34,32" />
        <path className={cx(style.line, style.line3)} d="M 50,50 H 70 L 66,68" />
        <path className={cx(style.line, style.line4)} d="M 30,65 H 70 " />
      </svg>
      <svg className={style.x} viewBox="0 0 100 100">
        <path className={style.line} d="M 34,32 L 66,68" />
        <path className={style.line} d="M 66,32 L 34,68" />
      </svg>
    </div>
  );
}
