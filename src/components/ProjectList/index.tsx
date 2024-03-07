import React from 'react';
import { FetchProjectsResult } from '@penumbra/actions/fetch-projects';
import { ProjectMenuItem } from '@penumbra/components/ProjectList/ProjectMenuItem';
import style from './style.module.scss';

export function ProjectList({ projects }: FetchProjectsResult): JSX.Element {
  const menuItems = projects.map((project) => (
    <ProjectMenuItem
      key={project.id}
      title={project.title}
      slug={project.slug}
      time={project.time}
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
