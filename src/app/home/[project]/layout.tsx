import React from 'react';
import { ProjectList } from '@penumbra/components/ProjectList';
import { fetchAllProjects } from '@penumbra/actions/fetch-projects';
import style from './layout.module.scss';

export default async function ProjectLayout({ children }: { children: React.ReactNode }) {
  const { projects } = await fetchAllProjects();

  return (
    <div className={style.layout}>
      <ProjectList projects={projects} />
      {children}
    </div>
  );
}
