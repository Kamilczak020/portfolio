import React, { AllHTMLAttributes, ForwardedRef } from 'react';
import classnames from 'classnames';
import {
  defaultLineHeights,
  FontSize,
  FontWeight,
} from '@penumbra/components/Typography/designSystem';
import { exists } from '@penumbra/util/exists';
import { getTypographyClassNames, omitTypographyProps, TypographyProps } from '../index';
import style from './style.module.scss';

export interface TextElementProps
  extends TypographyProps,
    Omit<AllHTMLAttributes<HTMLDivElement>, 'size'> {
  isInline?: boolean;
  skeleton?: boolean;
  lineClamp?: number;
  secondary?: boolean;
}

export const TextElement = React.forwardRef(
  (
    {
      className,
      children,
      size = FontSize.S,
      lineHeight = defaultLineHeights[size],
      weight = FontWeight.Regular,
      isInline = false,
      lineClamp,
      skeleton,
      secondary,
      style: propStyle,
      ...baseProps
    }: TextElementProps,
    ref?: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const lineClampStyle = lineClamp || undefined;
    return (
      <div
        {...omitTypographyProps(baseProps)}
        ref={ref}
        data-line-clamp={lineClamp}
        className={classnames(
          getTypographyClassNames({ ...baseProps, lineHeight, weight }),
          isInline && style.isInline,
          skeleton && style.skeleton,
          secondary && style.secondary,
          lineClamp && style.lineClamp,
          style[`size${size}`],
          className,
        )}
        style={{ ...(propStyle || {}), lineClamp: lineClampStyle, WebkitLineClamp: lineClampStyle }}
      >
        {skeleton && !exists(children) ? '...' : children}
      </div>
    );
  },
);

TextElement.displayName = 'TextElement';
