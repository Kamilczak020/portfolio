import React, { ComponentType, HTMLAttributes, Suspense } from 'react';
import classnames from 'classnames';
import * as icons from './icons';
import style from './style.module.scss';

export type IconType = keyof typeof icons;

export enum IconSize {
  XL = 'extraLarge',
  L = 'large',
  M = 'medium',
  S = 'small',
  Custom = 'custom',
}

export interface IconProps extends HTMLAttributes<SVGElement> {
  type: IconType;
  size?: IconSize;
}

export const Icon = React.memo(
  ({ className, type, size = IconSize.M, ...baseProps }: IconProps): JSX.Element => {
    const Component = icons[type] as ComponentType<any>;

    if (!Component) {
      throw new Error(`Unknown icon type ${type}`);
    }

    const classNames = classnames(style.icon, style[type], style[size], className);

    return (
      <Suspense fallback={<div className={classNames} />}>
        <Component className={classNames} {...baseProps} />
      </Suspense>
    );
  },
);
