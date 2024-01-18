'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '@penumbra/components/Icon';
import classnames from 'classnames';
import style from './style.module.scss';

export function MoonBarNav() {
  if (typeof window === 'undefined') {
    return null;
  }

  const root = document.getElementById('moon-bar-overlay') || document.body;
  return createPortal(
    <div className={style.moonBarNav}>
      <div className={style.row}>
        <Icon type="home" className={classnames(style.icon, style.home)} />
        <Icon type="person" className={classnames(style.icon, style.person)} />
      </div>
      <div className={style.row}>
        <Icon type="blog" className={classnames(style.icon, style.blog)} />
        <Icon type="contact" className={classnames(style.icon, style.contact)} />
      </div>
    </div>,
    root,
  );
}
