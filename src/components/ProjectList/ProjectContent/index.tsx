import React, { forwardRef } from 'react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { ProjectData } from '@penumbra/actions/fetch-projects';
import style from './style.module.scss';

export type ProjectContentProps = {
  data: ProjectData;
};

export const ProjectContent = forwardRef<HTMLDivElement, ProjectContentProps>(
  ({ data }: ProjectContentProps, ref) => {
    return (
      <div ref={ref} className={style.project}>
        <h1>{data.title}</h1>
        <TinaMarkdown content={data.body || []} />
      </div>
    );
  },
);
