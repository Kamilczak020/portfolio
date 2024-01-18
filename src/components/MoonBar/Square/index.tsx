'use client';

import React from 'react';
import classNames from 'classnames/bind';
import style from './style.module.scss';

const cx = classNames.bind(style);

type MoonSquareProps = {
  squareClassName?: string;
  wrapperClassName?: string;
};

export function Square({ squareClassName, wrapperClassName }: MoonSquareProps): JSX.Element {
  return (
    <div className={cx(style.moonSquareWrapper, wrapperClassName)}>
      <div className={cx(style.moonSquare, squareClassName)} />
    </div>
  );
}
