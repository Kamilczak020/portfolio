import React from 'react';
import { Metadata } from 'next';
import style from './style.module.scss';

export const metadata: Metadata = {
  title: 'Penumbra | Bio',
  description: 'Penumbra',
};

export default function BioLayout({ children }: { children: React.ReactNode }) {
  return <div className={style.bio}>{children}</div>;
}
