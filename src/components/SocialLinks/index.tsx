import React from 'react';
import { Icon, IconSize } from '@penumbra/components/Icon';
import { metadata } from '@penumbra/app/bio/page.mdx';
import style from './style.module.scss';

export function SocialLinks() {
  return (
    <div className={style.social}>
      <a className={style.link} href={metadata.linkedin} aria-label="linkedin.com">
        <Icon type="linkedin" size={IconSize.L} />
      </a>
      <a className={style.link} href={metadata.github} aria-label="github.com">
        <Icon type="github" size={IconSize.L} />
      </a>
      <a className={style.link} href={metadata.gitlab} aria-label="gitlab.com">
        <Icon type="gitlab" size={IconSize.L} />
      </a>
      <a className={style.link} href={metadata.x} aria-label="x.com">
        <Icon type="x" size={IconSize.L} />
      </a>
    </div>
  );
}
