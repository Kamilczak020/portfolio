import React from 'react';
import { ContactForm } from '@penumbra/components/ContactForm';
import { Metadata } from 'next';
import { PersonalDetails } from '@penumbra/components/PersonalDetails';
import { Divider } from '@penumbra/components/Divider';
import style from './style.module.scss';

export const metadata: Metadata = {
  title: 'Penumbra | Contact',
  description: 'Penumbra',
};

export default function ContactPage(): JSX.Element {
  return (
    <div className={style.contact}>
      <PersonalDetails />
      <Divider text="or just email me" containerClassName={style.divider} />
      <ContactForm />
    </div>
  );
}
