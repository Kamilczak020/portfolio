import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MoonBar } from '@penumbra/components/MoonBar';
import { TitleBar } from '@penumbra/components/TitleBar';
import { NavBar } from '@penumbra/components/NavBar';
import style from './layout.module.scss';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Penumbra | Home',
  description: 'Penumbra',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={style.bgTexture} />
        <div id="moon-root" />
        <div id="moon-bar-overlay" />
        <div className={style.page}>
          <div className={style.left}>
            <MoonBar />
          </div>
          <div className={style.content}>
            <TitleBar />
            {children}
          </div>
          <div className={style.right}>
            <NavBar />
          </div>
        </div>
      </body>
    </html>
  );
}
