'use client';

import React from 'react';
import { Moon, MoonProps } from '@penumbra/components/Moon';
import classNames from 'classnames/bind';
import style from './style.module.scss';

const cx = classNames.bind(style);

type MoonSquareProps = MoonProps & {
  squareClassName?: string;
  wrapperClassName?: string;
};

export function MoonSquare({
  squareClassName,
  wrapperClassName,
  ...moonProps
}: MoonSquareProps): JSX.Element {
  return (
    <div className={cx(style.moonSquareWrapper, wrapperClassName)}>
      <div className={cx(style.moonSquare, squareClassName)}>
        <Moon {...moonProps} rotation={(moonProps.rotation || 0) - 45} />
      </div>
    </div>
  );
}
