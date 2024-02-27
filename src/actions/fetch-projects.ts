import { cache } from 'react';
import { exists } from '@penumbra/util/exists';
import { ProjectPageData } from '@penumbra/components/ProjectList/ProjectPage';
import { client } from '../../tina/__generated__/client';

export type FetchProjectsResult = Awaited<ReturnType<typeof fetchProjects>>;

async function fetchProjects() {
  const response = await client.queries.projectsConnection();
  if (!exists(response.data.projectsConnection.edges)) {
    return { projects: [] };
  }

  const projects = response.data.projectsConnection.edges
    ?.map((project) => {
      if (!exists(project) || !exists(project.node)) {
        return null;
      }

      return {
        id: project.node.id,
        title: project.node.title,
        time: project.node.time,
        body: project.node.body,
      } satisfies ProjectPageData;
    })
    .filter(exists)
    .sort((a, b) => b.time.from - a.time.from) as Array<ProjectPageData>;

  return { projects: projects || [] };
}

export const fetchAllProjects = cache(fetchProjects);
