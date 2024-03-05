import { cache } from 'react';
import { exists } from '@penumbra/util/exists';
import { NumberRange } from '@penumbra/util/types';
import { TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { client } from '../../tina/__generated__/client';

export type ProjectData = {
  id: string;
  title: string;
  time: NumberRange;
  body?: TinaMarkdownContent;
};

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
      } satisfies ProjectData;
    })
    .filter(exists)
    .sort((a, b) => {
      if (b.time.to - a.time.to === 0) {
        return b.time.from - a.time.from;
      }

      return b.time.to - a.time.to;
    }) as Array<ProjectData>;

  return { projects: projects || [] };
}

export type FetchProjectsResult = Awaited<ReturnType<typeof fetchProjects>>;
export const fetchAllProjects = cache(fetchProjects);
