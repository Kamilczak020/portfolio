'use client';

import React from 'react';
import { Icon, IconProps, IconSize } from '@penumbra/components/Icon';
import classnames from 'classnames/bind';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import style from './style.module.scss';

const cx = classnames.bind(style);

type NavIconProps = IconProps & {
  path: string;
  wrapperClassName?: string;
};

export function NavIcon({ path, wrapperClassName, ...iconProps }: NavIconProps) {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      tabIndex={-1}
      className={cx(style.nav, wrapperClassName, { active: path === pathname })}
    >
      <Icon {...iconProps} size={IconSize.Custom} />
    </Link>
  );
}
