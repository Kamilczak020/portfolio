'use client';

import dynamic from 'next/dynamic';
import React, { ComponentType, Suspense, useEffect } from 'react';
import { mustExist } from '@penumbra/util/exists';
import { motion, useAnimation } from 'framer-motion';
import classnames from 'classnames/bind';
import style from './style.module.scss';

const cx = classnames.bind(style);

const phaseValues = [1, 2, 3, 4, 5] as const;
type MoonPhase = (typeof phaseValues)[number];

export type MoonProps = {
  phase: MoonPhase;
  className?: string;
};

const moons: Map<number, ComponentType<any>> = new Map(
  phaseValues.map((phase) => [phase, dynamic(() => import(`./moon-phase-${phase}.svg`))]),
);

type AnimationProperties = {
  direction: 1 | -1;
  duration: number;
};

export const moonAnimations: Record<MoonPhase, AnimationProperties> = {
  1: { direction: 1, duration: 30 },
  2: { direction: 1, duration: 35 },
  3: { direction: -1, duration: 25 },
  4: { direction: 1, duration: 25 },
  5: { direction: -1, duration: 30 },
};

export function Moon({ phase, className }: MoonProps): JSX.Element {
  const MoonComponent = mustExist(moons.get(phase));
  const classNames = cx(style.moonContainer, className);
  const controls = useAnimation();

  useEffect(() => {
    const rotate = async () => {
      const { direction, duration } = moonAnimations[phase];
      await controls.start({
        rotate: [0, 360 * direction],
        transition: { duration, repeat: Infinity, ease: 'linear' },
      });
    };

    rotate();
  }, [controls]);

  return (
    <Suspense fallback={<div className={classNames} />}>
      <motion.div className={classNames} animate={controls}>
        <MoonComponent className={style.moon} />
      </motion.div>
    </Suspense>
  );
}
