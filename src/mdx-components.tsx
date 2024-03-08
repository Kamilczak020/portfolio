import type { MDXComponents } from 'mdx/types';
import { SocialLinks } from '@penumbra/components/SocialLinks';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    SocialLinks,
  };
}
