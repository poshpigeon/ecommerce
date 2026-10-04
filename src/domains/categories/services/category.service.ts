import { client } from '@/shared/lib/sanity';
import { cache } from 'react';

export const categoryService = {
  /**
   * Fetch all categories ordered by name
   */
  getCategories: cache(async () => {
    return await client.fetch(`
      *[_type == "category" && name in ["Leggings", "Nighty", "Inskirt", "Sarees"]] | order(name asc) {
        _id, name, slug, image
      }
    `);
  })
};
