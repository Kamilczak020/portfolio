'use client';

import React from 'react';
import { createPortal } from 'react-dom';
import { NavIcon } from '@penumbra/components/NavIcon';
import style from './style.module.scss';

export default function MoonBarNav() {
  if (typeof window === 'undefined') {
    return null;
  }

  const root = document?.getElementById('moon-bar-overlay') || document?.body;

  return createPortal(
    <div className={style.moonBarNav}>
      <div className={style.row}>
        <NavIcon
          path="/home"
          type="home"
          className={style.icon}
          wrapperClassName={style.iconWrapper}
        />
        <NavIcon
          path="/about-me"
          type="person"
          className={style.icon}
          wrapperClassName={style.iconWrapper}
        />
      </div>
      <div className={style.row}>
        <NavIcon
          path="/blog"
          type="blog"
          className={style.icon}
          wrapperClassName={style.iconWrapper}
        />
        <NavIcon
          path="/contact"
          type="contact"
          className={style.icon}
          wrapperClassName={style.iconWrapper}
        />
      </div>
    </div>,
    root,
  );
}
