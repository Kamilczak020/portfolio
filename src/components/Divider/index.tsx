import React from 'react';
import classnames from 'classnames';
import { exists } from '@penumbra/util/exists';
import style from './style.module.scss';

export type DividerProps = {
  text?: string;
  containerClassName?: string;
  dividerClassName?: string;
};

export function Divider({ text, containerClassName, dividerClassName }: DividerProps): JSX.Element {
  return (
    <div className={classnames(style.container, containerClassName)}>
      <hr className={classnames(style.divider, dividerClassName)} />
      {!exists(text) ? null : (
        <>
          <span className={style.text}>{text}</span>
          <hr className={classnames(style.divider, dividerClassName)} />
        </>
      )}
    </div>
  );
}
