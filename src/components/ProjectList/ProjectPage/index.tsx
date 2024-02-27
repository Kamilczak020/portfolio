import React, { forwardRef } from 'react';
import { TinaMarkdown, TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { NumberRange } from '@penumbra/util/types';
import style from './style.module.scss';

export type ProjectPageData = {
  id: string;
  title: string;
  time: NumberRange;
  body?: TinaMarkdownContent;
};

export type ProjectPageProps = {
  data: ProjectPageData;
};

export const ProjectPage = forwardRef<HTMLDivElement, ProjectPageProps>(
  ({ data }: ProjectPageProps, ref) => {
    return (
      <div ref={ref} className={style.project}>
        <h1>{data.title}</h1>
        <TinaMarkdown content={data.body || []} />
      </div>
    );
  },
);
