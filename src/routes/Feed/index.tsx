import { useState } from 'react';

import ContactCard from './ContactCard';
import { FeedHeader } from './FeedHeader';
import Footer from './Footer';
import MobileProfileCard from './MobileProfileCard';
import PostList from './PostList';
import PinnedPosts from './PostList/PinnedPosts';
import ProfileCard from './ProfileCard';
import SearchInput from './SearchInput';
import ServiceCard from './ServiceCard';
import TagList from './TagList';

const HEADER_HEIGHT = 73;

type Props = {};

const Feed: React.FC<Props> = () => {
  const [q, setQ] = useState('');

  return (
    <div className="grid grid-cols-12 gap-6 py-8 md:py-2">
      <div className="scrollbar-hide sticky top-[63px] col-span-2 hidden h-[calc(100vh-73px)] overflow-scroll lg:block">
        <TagList />
      </div>
      <div className="col-span-12 lg:col-span-7">
        {/* 介绍卡片 */}
        <MobileProfileCard />
        {/* 固定文章 */}
        <PinnedPosts q={q} />
        <SearchInput value={q} onChange={(e) => setQ(e.target.value)} />
        <div className="block lg:hidden">
          <TagList />
        </div>
        <FeedHeader />
        <PostList q={q} />
        <div className="pb-8 lg:hidden">
          <Footer />
        </div>
      </div>
      <div className="scrollbar-hide sticky top-[63px] col-span-3 hidden h-[calc(100vh-73px)] overflow-scroll lg:block">
        <ProfileCard />
        <ServiceCard />
        <ContactCard />
        <div className="pt-4">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Feed;
