'use client';

import React from 'react';
import { ProjectMenuItem } from '@penumbra/components/ProjectList/ProjectMenuItem';
import { projects } from '@penumbra/app/home/projects';
import { usePathname } from 'next/navigation';
import style from './style.module.scss';

export function ProjectList(): JSX.Element {
  const path = usePathname().split('/').pop();

  const menuItems = projects.map((project) => (
    <ProjectMenuItem
      key={project.slug}
      title={project.display}
      slug={project.slug}
      time={project.time}
      active={path === project.slug}
    />
  ));

  return (
    <div className={style.projects}>
      <div className={style.grid}>
        <nav className={style.menu}>
          <h4>Previous projects</h4>
          {menuItems}
        </nav>
      </div>
    </div>
  );
}
