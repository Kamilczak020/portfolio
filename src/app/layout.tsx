import React from 'react';
import { Inter } from 'next/font/google';
import { MoonBar } from '@penumbra/components/MoonBar';
import { TitleBar } from '@penumbra/components/TitleBar';
import style from './layout.module.scss';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={style.bgTexture} />
        <div id="moon-root" />
        <div id="moon-bar-overlay" />
        <div className={style.page}>
          <div className={style.title}>
            <TitleBar />
          </div>
          <div className={style.left}>
            <MoonBar />
          </div>
          <div className={style.middle}>
            <div className={style.content}>{children}</div>
          </div>
          <div className={style.right} />
        </div>
      </body>
    </html>
  );
}
