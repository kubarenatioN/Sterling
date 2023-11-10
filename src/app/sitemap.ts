import { GET_BLOG } from '@/db/queries/blog';
import { getClient } from '@/lib/apollo/client';
import { BlogPageData } from '@/models/blog.models';
import { MetadataRoute } from 'next';

export const revalidate = 3600;

const baseUrl = process.env.CLIENT_DOMAIN;

const pages = [
  {
    url: `${baseUrl}`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 1,
  },
  {
    url: `${baseUrl}/about`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/services`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/team`,
    lastModified: new Date(),
    changeFrequency: 'yearly',
    priority: 0.8,
  },
  {
    url: `${baseUrl}/blog`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { data } = await getClient().query<BlogPageData>({
    query: GET_BLOG,
  });

  const {
    posts: { nodes },
  } = data;

  const posts = nodes.map((node) => {
    const lastModified = new Date();

    return {
      url: `${baseUrl}/blog/${node.slug}`,
      lastModified,
      changeFrequency: 'yearly' as any,
      priority: 0.8,
    };
  });

  return [...pages, ...posts];
}
