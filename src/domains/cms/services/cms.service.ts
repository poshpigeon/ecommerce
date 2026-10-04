import { client } from '@/shared/lib/sanity';
import { cache } from 'react';

export const cmsService = {
  /**
   * Fetch structured homepage data including hero, collections, and trending products
   */
  getHomePageData: cache(async () => {
    return await client.fetch(`
      *[_type == "homePage"][0] {
        hero,
        featuredCollections[] {
          title,
          image,
          "slug": category->slug.current
        },
        trendingProducts {
          heading,
          products[]-> {
            _id, name, slug, price, mainImage, "category": category->name
          }
        },
        editorial,
        announcement
      }
    `);
  })
};
