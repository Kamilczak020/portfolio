import { Italiana, IBM_Plex_Mono } from 'next/font/google';

export const ibm = IBM_Plex_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400'],
  variable: '--content-font',
});

export const italiana = Italiana({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--title-font',
});
