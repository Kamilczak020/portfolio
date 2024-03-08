import React from 'react';
import { ProjectList } from '@penumbra/components/ProjectList';
import style from './layout.module.scss';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.project}>
      <ProjectList />
      <div className={style.contentWrapper}>
        <div id="project-content" className={style.content}>
          {children}
        </div>
      </div>
      <div style={{ height: '50px' }} />
    </div>
  );
}
