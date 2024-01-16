import dynamic from 'next/dynamic';

export const contact = dynamic(() => import('./contact.svg'));
export const person = dynamic(() => import('./person.svg'));
export const blog = dynamic(() => import('./blog.svg'));
export const home = dynamic(() => import('./home.svg'));
