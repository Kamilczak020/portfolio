declare module '@penumbra/app/bio/page.mdx' {
  export const metadata: {
    title: string;
    slug: string;
    time: string;
    x: string;
    linkedin: string;
    github: string;
    gitlab: string;
  };
}

declare module '*.mdx' {
  export const metadata: {
    title: string;
    display: string;
    slug: string;
    time: {
      from: number;
      to: number;
    };
  };
}
