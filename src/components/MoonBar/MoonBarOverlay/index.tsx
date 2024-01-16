'use client';

import React, { RefObject, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Icon, IconSize } from '@penumbra/components/Icon';
import classnames from 'classnames';
import style from './style.module.scss';

type MoonBarOverlayProps = {
  moonBarRef: RefObject<HTMLDivElement>;
};

export function MoonBarOverlay({ moonBarRef }: MoonBarOverlayProps) {
  const root = document.getElementById('moon-bar-overlay') || document.body;
  const box = moonBarRef.current?.getBoundingClientRect();
  const moonBarStyle = useMemo(
    () => ({
      width: box?.width || 0,
      minWidth: box?.width || 0,
      left: box?.x || 0,
      top: box?.y || 0,
    }),
    [box],
  );

  return createPortal(
    <div className={style.moonBarOverlay} style={moonBarStyle}>
      <Icon size={IconSize.L} type="home" className={classnames(style.icon, style.home)} />
      <Icon size={IconSize.L} type="person" className={classnames(style.icon, style.person)} />
      <Icon size={IconSize.L} type="blog" className={classnames(style.icon, style.blog)} />
      <Icon size={IconSize.L} type="contact" className={classnames(style.icon, style.contact)} />
    </div>,
    root,
  );
}
