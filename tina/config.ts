import { defineConfig } from 'tinacms';

function isValidHttpUrl(value: string) {
  let url;

  try {
    url = new URL(value);
  } catch {
    return 'Not a valid URL';
  }

  return url.protocol === 'http:' || url.protocol === 'https:' ? undefined : 'Not a valid URL';
}

const branch =
  process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'master';

export default defineConfig({
  branch,

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'projects',
        label: 'Projects',
        path: 'content/projects',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'object',
            name: 'time',
            label: 'Time',
            required: true,
            fields: [
              {
                type: 'number',
                name: 'from',
                label: 'From',
                required: true,
              },
              {
                type: 'number',
                name: 'to',
                label: 'To',
                required: true,
              },
            ],
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
      {
        name: 'articles',
        label: 'Articles',
        path: 'content/articles',
        format: 'mdx',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'datetime',
            name: 'time',
            label: 'Time',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
            templates: [
              {
                name: 'SocialLinks',
                label: 'Social Links',
                fields: [
                  {
                    name: 'github',
                    label: 'Github Profile',
                    type: 'string',
                    ui: {
                      validate: (value) => isValidHttpUrl(value),
                    },
                  },
                  {
                    name: 'gitlab',
                    label: 'Gitlab Profile',
                    type: 'string',
                    ui: {
                      validate: (value) => isValidHttpUrl(value),
                    },
                  },
                  {
                    name: 'linkedin',
                    label: 'LinkedIn Profile',
                    type: 'string',
                    ui: {
                      validate: (value) => isValidHttpUrl(value),
                    },
                  },
                  {
                    name: 'x',
                    label: 'X Profile',
                    type: 'string',
                    ui: {
                      validate: (value) => isValidHttpUrl(value),
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
