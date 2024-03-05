import React from 'react';
import style from './style.module.scss';

export function PersonalDetails(): JSX.Element {
  return (
    <div className={style.details}>
      <span className={style.key}>Name</span>
      <span className={style.value}>Kamil Solecki</span>
      <span className={style.key}>Email address</span>
      <span className={style.value}>contact@penumbra.co</span>
      <span className={style.key}>Full company name</span>
      <span className={style.value}>Penumbra Kamil Solecki</span>
      <span className={style.key}>Tax Identification</span>
      <span className={style.value}>PL9492248270</span>
      <span className={style.key}>Company address</span>
      <span className={style.value}>Konarskiego 10</span>
      <span className={style.value}>42-209, Częstochowa</span>
      <span className={style.value}>Poland</span>
    </div>
  );
}
