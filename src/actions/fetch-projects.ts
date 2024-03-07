import { cache } from 'react';
import { exists } from '@penumbra/util/exists';
import { NumberRange } from '@penumbra/util/types';
import { TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { client } from '../../tina/__generated__/client';

export type ProjectData = {
  id: string;
  title: string;
  slug: string;
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
        slug: project.node._sys.filename,
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

export async function fetchProject(slug: string): Promise<ProjectData | null> {
  const response = await client.queries.projects({ relativePath: `${slug}.mdx` });
  if (exists(response.errors)) {
    return null;
  }

  return {
    id: response.data.projects.id,
    title: response.data.projects.title,
    slug: response.data.projects._sys.filename,
    time: response.data.projects.time,
    body: response.data.projects.body,
  } satisfies ProjectData;
}

export type FetchProjectsResult = Awaited<ReturnType<typeof fetchProjects>>;
export const fetchAllProjects = cache(fetchProjects);
