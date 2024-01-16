'use client';

import dynamic from 'next/dynamic';
import React, { ComponentType } from 'react';
import { mustExist } from '@penumbra/util/exists';
import { motion } from 'framer-motion';
import classnames from 'classnames/bind';
import style from './style.module.scss';

const cx = classnames.bind(style);

const phaseValues = [1, 2, 3, 4, 5] as const;
type MoonPhase = (typeof phaseValues)[number];

export type MoonProps = {
  phase: MoonPhase;
  rotation: number;
  className?: string;
};

const moons: Map<number, ComponentType<any>> = new Map(
  phaseValues.map((phase) => [phase, dynamic(() => import(`./moon-phase-${phase}.svg`))]),
);

export function Moon({ phase, rotation, className }: MoonProps): JSX.Element {
  const MoonComponent = mustExist(moons.get(phase));

  return (
    <motion.div className={cx(style.moonContainer, className)} animate={{ rotate: rotation }}>
      <MoonComponent className={style.moon} />
    </motion.div>
  );
}
