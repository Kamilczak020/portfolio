import React from 'react';
import { Metadata } from 'next';
import style from './style.module.scss';

export const metadata: Metadata = {
  title: 'Penumbra | Blog',
  description: 'Penumbra',
};

export default function BlogPage(): JSX.Element {
  return (
    <div className={style.contact}>
      <h4>Blog Coming soon</h4>
    </div>
  );
}
