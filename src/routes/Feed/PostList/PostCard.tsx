import Image from 'next/image';
import Link from 'next/link';

import { CONFIG } from 'site.config';
import { formatDate } from 'src/libs/utils';

import Category from '../../../components/Category';
import Tag from '../../../components/Tag';
import { TPost } from '../../../types';

type Props = {
  data: TPost;
};

const PostCard: React.FC<Props> = ({ data }) => {
  const category = (data.category && data.category?.[0]) || undefined;

  return (
    <Link href={`/${data.slug}`} className="relative mb-6 block">
      <article className="duration-300relative overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg dark:bg-[rgb(40,40,40)]">
        {category && (
          <div className="absolute left-4 top-4 z-10">
            <Category>{category}</Category>
          </div>
        )}
        {data.thumbnail && (
          <div className="relative w-full bg-gray-200 pb-[66%] lg:pb-[50%]">
            <Image
              src={data.thumbnail}
              fill
              alt={data.title}
              className="object-cover"
            />
          </div>
        )}
        <div
          className={`p-4 ${!data.thumbnail ? 'pt-14' : ''} ${!category ? 'pt-6' : ''}`}
        >
          <header className="mb-2 flex flex-col justify-between md:flex-row md:items-baseline">
            <h2 className="mb-2 cursor-pointer text-lg font-medium md:mb-0 md:text-xl">
              {data.title}
            </h2>
          </header>
          <div className="mb-4 flex items-center gap-2 text-sm dark:text-gray-400">
            <div>
              {formatDate(
                data?.date?.start_date || data.createdTime,
                CONFIG.lang,
              )}
            </div>
          </div>
          <div className="mb-4">
            <p className="hidden text-gray-700 dark:text-gray-300 md:block">
              {data.summary}
            </p>
          </div>
          <div className="flex gap-2">
            {data.tags &&
              data.tags.map((tag: string, idx: number) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
