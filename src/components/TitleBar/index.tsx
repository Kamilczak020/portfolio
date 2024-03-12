'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { NavBar } from '@penumbra/components/NavBar';
import { italiana } from '@penumbra/app/fonts';
import classnames from 'classnames/bind';
import { BurgerMenu } from '@penumbra/components/BurgerMenu';
import { NavItem } from '@penumbra/components/NavItem';
import { Accordion } from '@penumbra/components/Accordion';
import { ProjectMenuItem } from '@penumbra/components/ProjectList/ProjectMenuItem';
import { projects } from '@penumbra/app/home/projects';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import style from './style.module.scss';

const cx = classnames.bind(style);

const variants = {
  open: { height: 'auto', opacity: 1 },
  closed: { height: '0px', opacity: 0 },
};

export function TitleBar(): JSX.Element {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const path = pathname.split('/').pop();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleInteraction = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const menuItems = projects.map((project) => (
    <ProjectMenuItem
      key={project.slug}
      title={project.display}
      slug={project.slug}
      active={path === project.slug}
      className={style.menuItem}
    />
  ));

  return (
    <div className={style.titleBar}>
      <div className={style.contentWrapper}>
        <div className={style.titleWrapper}>
          <h1 className={cx(style.title, italiana.className)}>Penumbra</h1>
          <NavBar className={style.nav} />
          <BurgerMenu
            className={style.burger}
            open={open}
            onClick={handleInteraction}
            onKeyDown={handleInteraction}
          />
        </div>
        <h5 className={style.description}>A one-man infrastructure and backend development shop</h5>
        <motion.div
          animate={open ? 'open' : 'closed'}
          initial="closed"
          variants={variants}
          className={cx(style.links, { open })}
        >
          <Accordion className={style.home}>{menuItems}</Accordion>
          <NavItem className={style.link} path="/bio" title="Bio" />
          <NavItem className={style.link} path="/blog" title="Blog" />
          <NavItem className={style.link} path="/contact" title="Contact" />
        </motion.div>
      </div>
    </div>
  );
}
