import { DEFAULT_CATEGORY } from 'src/constants';
import { getAllSelectItemsFromPosts } from 'src/libs/utils/notion';

import usePostsQuery from './usePostsQuery';

export const useCategoriesQuery = () => {
  const posts = usePostsQuery();
  const categories = getAllSelectItemsFromPosts('category', posts);

  return {
    [DEFAULT_CATEGORY]: posts.length,
    ...categories,
  };
};
