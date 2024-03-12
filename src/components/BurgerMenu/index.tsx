'use client';

import React, { KeyboardEventHandler, MouseEventHandler } from 'react';
import classnames from 'classnames/bind';
import style from './style.module.scss';

const cx = classnames.bind(style);

type BurgerMenuProps = {
  open: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
  className?: string;
};

export function BurgerMenu({ className, open, onClick, onKeyDown }: BurgerMenuProps) {
  return (
    <div
      tabIndex={0}
      role="button"
      aria-label="Menu"
      className={cx(style.burgerMenu, className, { active: open })}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <svg className={style.burger} viewBox="0 0 50 50">
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
        <path className={cx(style.line, style.line1)} d="M5,10h40" />
        <path className={cx(style.line, style.line2)} d="M25,25H5L9,7" />
        <path className={cx(style.line, style.line3)} d="M25,25h20l-4,18" />
        <path className={cx(style.line, style.line4)} d="M5,40h40" />
      </svg>
      <svg className={style.x} viewBox="0 0 50 50">
        <path className={style.line} d="M9,7l32,36" />
        <path className={style.line} d="M41,7L9,43" />
      </svg>
    </div>
  );
}
