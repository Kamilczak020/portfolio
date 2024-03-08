'use client';

import React from 'react';
import { ProjectList } from '@penumbra/components/ProjectList';
import { projects } from '@penumbra/app/home/projects';
import { usePathname } from 'next/navigation';
import style from './layout.module.scss';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname().split('/').pop();
  const title = projects.find((x) => x.slug === path)?.title;

  return (
    <div className={style.project}>
      <ProjectList path={path} />
      <div className={style.content}>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}
