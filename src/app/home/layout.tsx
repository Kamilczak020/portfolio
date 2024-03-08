import React from 'react';
import { ProjectList } from '@penumbra/components/ProjectList';
import style from './layout.module.scss';

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={style.project}>
      <ProjectList />
      <div className={style.content}>{children}</div>
    </div>
  );
}
