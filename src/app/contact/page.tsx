import React from 'react';
import { ContactForm } from '@penumbra/components/ContactForm';
import { Metadata } from 'next';
import style from './style.module.scss';

export const metadata: Metadata = {
  title: 'Penumbra | Contact',
  description: 'Penumbra',
};

export default function ContactPage(): JSX.Element {
  return (
    <div className={style.contact}>
      <ContactForm />
    </div>
  );
}
