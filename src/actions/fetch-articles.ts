import { cache } from 'react';
import { exists } from '@penumbra/util/exists';
import { TinaMarkdownContent } from 'tinacms/dist/rich-text';
import { parseISO } from 'date-fns';
import { client } from '../../tina/__generated__/client';

export type ArticleData = {
  id: string;
  title: string;
  date: Date;
  body?: TinaMarkdownContent;
};

async function fetchArticles() {
  const response = await client.queries.articlesConnection();
  if (!exists(response.data.articlesConnection.edges)) {
    return { articles: [] };
  }

  const articles = response.data.articlesConnection.edges
    ?.map((article) => {
      if (!exists(article) || !exists(article.node)) {
        return null;
      }

      return {
        id: article.node.id,
        title: article.node.title,
        date: parseISO(article.node.time),
        body: article.node.body,
      } satisfies ArticleData;
    })
    .filter(exists)
    .filter((article) => article.title !== 'About Me')
    .sort((a, b) => b.date.getTime() - a.date.getTime()) as Array<ArticleData>;

  return { articles: articles || [] };
}

export async function fetchBio(): Promise<ArticleData | null> {
  const response = await client.queries.articles({ relativePath: 'bio.mdx' });
  if (exists(response.errors)) {
    return null;
  }

  return {
    id: response.data.articles.id,
    title: response.data.articles.title,
    date: parseISO(response.data.articles.time),
    body: response.data.articles.body,
  };
}

export type FetchArticlesResult = Awaited<ReturnType<typeof fetchArticles>>;
export const fetchAllArticles = cache(fetchArticles);
