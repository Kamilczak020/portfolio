import { metadata as brevySupport } from '@penumbra/app/home/brevy-support/page.mdx';
import { metadata as brevyVideo } from '@penumbra/app/home/brevy-video/page.mdx';
import { metadata as cblRadio } from '@penumbra/app/home/cbl-radio/page.mdx';
import { metadata as decorway } from '@penumbra/app/home/decorway/page.mdx';
import { metadata as elampki } from '@penumbra/app/home/elampki/page.mdx';
import { NumberRange } from '@penumbra/util/types';

export type ProjectMetadata = {
  title: string;
  display: string;
  slug: string;
  time: NumberRange;
};

export const projects: Array<ProjectMetadata> = [
  brevySupport,
  brevyVideo,
  elampki,
  cblRadio,
  decorway,
];
