import React from 'react';
import { Metadata } from 'next';
import { fetchBio } from '@penumbra/actions/fetch-articles';
import { exists } from '@penumbra/util/exists';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { Icon, IconSize } from '@penumbra/components/Icon';
import style from './style.module.scss';

export const metadata: Metadata = {
  title: 'Penumbra | Bio',
  description: 'Penumbra',
};

type SocialLinksProps = {
  x: string;
  linkedin: string;
  github: string;
  gitlab: string;
};

const mdxComponents = {
  SocialLinks: ({ x, linkedin, github, gitlab }: SocialLinksProps) => {
    return (
      <div className={style.social}>
        <a className={style.link} href={linkedin} aria-label="linkedin.com">
          <Icon type="linkedin" size={IconSize.L} />
        </a>
        <a className={style.link} href={github} aria-label="github.com">
          <Icon type="github" size={IconSize.L} />
        </a>
        <a className={style.link} href={gitlab} aria-label="gitlab.com">
          <Icon type="gitlab" size={IconSize.L} />
        </a>
        <a className={style.link} href={x} aria-label="x.com">
          <Icon type="x" size={IconSize.L} />
        </a>
      </div>
    );
  },
};

export default async function BioPage() {
  const bio = await fetchBio();

  if (!exists(bio)) {
    return null;
  }

  return (
    <div className={style.bio}>
      <TinaMarkdown content={bio.body || []} components={mdxComponents} />
    </div>
  );
}
