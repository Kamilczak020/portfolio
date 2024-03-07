import React from 'react';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import { fetchProject } from '@penumbra/actions/fetch-projects';
import { mustExist } from '@penumbra/util/exists';
import { ProjectContent } from '@penumbra/components/ProjectList/ProjectContent';

export const metadata: Metadata = {
  title: 'Penumbra | Home',
  description: 'Penumbra',
};

export default async function ProjectPage() {
  const headersList = headers();
  const slug = mustExist(headersList.get('x-pathname')).split('/').pop();
  const project = await fetchProject(mustExist(slug));

  return <ProjectContent data={mustExist(project)} />;
}
