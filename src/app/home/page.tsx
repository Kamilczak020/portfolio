import { NumberRange } from '@penumbra/util/types';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Penumbra | Home',
  description: 'Penumbra',
};

export type ProjectMetadata = {
  title: string;
  display: string;
  slug: string;
  time: NumberRange;
};

export default function HomePage() {
  return redirect('/home/brevy-support');
}
