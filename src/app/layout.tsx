import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MoonBar } from '@penumbra/components/MoonBar';
import { TitleHeader } from '@penumbra/components/TitleHeader';
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
            <TitleHeader />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
