'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ProjectPage, ProjectPageData } from '@penumbra/components/ProjectList/ProjectPage';
import { exists, mustExist } from '@penumbra/util/exists';
import { FetchProjectsResult } from '@penumbra/actions/fetch-projects';
import { ProjectMenuItem } from '@penumbra/components/ProjectList/ProjectMenuItem';
import style from './style.module.scss';

export function ProjectList({ projects }: FetchProjectsResult): JSX.Element {
  const [activeProject, setActiveProject] = useState<ProjectPageData>();
  const pageRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (id: string) => {
      setActiveProject(projects.find((project) => project.id === id));
      pageRef.current?.scrollTo({ top: 0 });
    },
    [projects],
  );

  const menuItems = useMemo(
    () =>
      projects.map((project) => (
        <ProjectMenuItem
          id={project.id}
          key={project.id}
          title={project.title}
          time={project.time}
          active={project.id === activeProject?.id}
          onClick={handleClick}
        />
      )),
    [projects, activeProject],
  );

  useEffect(() => {
    if (!exists(activeProject) && Array.isArray(projects)) {
      setActiveProject(projects[0]);
    }
  }, [projects]);

  return (
    <div className={style.projects}>
      <div className={style.grid}>
        <nav className={style.menu}>
          <h4>Previous projects</h4>
          {menuItems}
        </nav>
        {exists(activeProject) && <ProjectPage ref={pageRef} data={mustExist(activeProject)} />}
      </div>
    </div>
  );
}
