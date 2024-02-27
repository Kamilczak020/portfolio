import React from 'react';
import { Metadata } from 'next';
import { ProjectList } from '@penumbra/components/ProjectList';
import { fetchAllProjects } from '@penumbra/actions/fetch-projects';
import style from './style.module.scss';

export const metadata: Metadata = {
  title: 'Penumbra | Home',
  description: 'Penumbra',
};

export default async function HomePage(): Promise<JSX.Element> {
  const { projects } = await fetchAllProjects();

  return (
    <div className={style.home}>
      <ProjectList projects={projects} />
    </div>
  );
}
