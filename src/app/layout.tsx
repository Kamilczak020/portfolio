import React from 'react';
import { MoonBar } from '@penumbra/components/MoonBar';
import { TitleBar } from '@penumbra/components/TitleBar';
import { ibm } from '@penumbra/app/fonts';
import style from './layout.module.scss';
import './globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ibm.className}>
        <div id="moon-root" />
        <div id="moon-bar-overlay" />
        <div className={style.page}>
          <div className={style.title}>
            <TitleBar />
          </div>
          <div className={style.bgTexture} />
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
