'use client';

import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import classnames from 'classnames/bind';
import { Icon, IconSize } from '@penumbra/components/Icon';
import { usePathname } from 'next/navigation';
import style from './style.module.scss';

const cx = classnames.bind(style);

const variants = {
  open: { height: 'auto', opacity: 1 },
  closed: { height: '0px', opacity: 0 },
};

type AccordionProps = {
  startOpen?: boolean;
  className?: string;
  children?: ReactNode | Array<ReactNode>;
};

export function Accordion({ startOpen = false, className, children }: AccordionProps) {
  const [open, setOpen] = useState(startOpen);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith('/home')) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [pathname]);

  const handleClick = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <div
      role="button"
      tabIndex={0}
      className={cx(style.accordion, className, { open })}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <div className={cx(style.homeRow, { active: pathname.startsWith('/home') })}>
        <span>Home</span>
        <Icon type="triangle" size={IconSize.Custom} className={style.icon} />
      </div>
      <motion.div animate={open ? 'open' : 'closed'} variants={variants} className={style.drawer}>
        <div className={style.contentWrapper}>{children}</div>
      </motion.div>
    </div>
  );
}
