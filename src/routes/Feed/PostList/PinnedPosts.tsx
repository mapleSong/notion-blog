import React, { useMemo } from 'react';

import { DEFAULT_CATEGORY } from 'src/constants';
import usePostsQuery from 'src/hooks/usePostsQuery';
import PostCard from 'src/routes/Feed/PostList/PostCard';

import { filterPosts } from './filterPosts';

type Props = {
  q: string;
};

const PinnedPosts: React.FC<Props> = ({ q }) => {
  const data = usePostsQuery();

  const filteredPosts = useMemo(() => {
    const baseFiltered = filterPosts({
      posts: data,
      q,
      category: DEFAULT_CATEGORY,
      order: 'desc',
    });
    return baseFiltered.filter((post) => post.tags?.includes('Pinned'));
  }, [data, q]);

  if (filteredPosts.length === 0) return null;

  return (
    <div className="relative">
      <div className="mb-4 flex items-center justify-between border-b border-gray-300">
        <div className="mb-2 mt-2 flex cursor-pointer items-center gap-1 text-xl font-bold">
          📌 Pinned Posts
        </div>
      </div>
      <div className="my-2">
        {filteredPosts.map((post) => (
          <PostCard key={post.slug} data={post} />
        ))}
      </div>
    </div>
  );
};

export default PinnedPosts;
