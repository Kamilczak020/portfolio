import React from 'react';
import { ProjectMenuItem } from '@penumbra/components/ProjectList/ProjectMenuItem';
import { projects } from '@penumbra/app/home/projects';
import style from './style.module.scss';

type ProjectListProps = {
  path?: string;
};

export function ProjectList({ path }: ProjectListProps): JSX.Element {
  const menuItems = projects.map((project) => (
    <ProjectMenuItem
      key={project.slug}
      title={project.title}
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
