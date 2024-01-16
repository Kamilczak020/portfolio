import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
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
        {children}
      </body>
    </html>
  );
}
