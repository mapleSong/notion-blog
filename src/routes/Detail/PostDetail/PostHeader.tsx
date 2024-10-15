import React from 'react';

import Image from 'next/image';

import { CONFIG } from 'site.config';
import Tag from 'src/components/Tag';
import { formatDate } from 'src/libs/utils';
import { TPost } from 'src/types';

type Props = {
  data: TPost;
};

const PostHeader: React.FC<Props> = ({ data }) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      {data.type[0] !== 'Paper' && (
        <nav className="mt-6 text-gray-700 dark:text-[rgb(160,160,160)]">
          <div className="flex gap-3 items-center mb-3">
            {data.author && data.author[0] && data.author[0].name && (
              <>
                <div className="flex gap-2 items-center">
                  <Image
                    className="rounded-full"
                    src={data.author[0].profile_photo || CONFIG.profile.image}
                    alt="profile_photo"
                    width={24}
                    height={24}
                  />
                  <div>{data.author[0].name}</div>
                </div>
                <div className="self-stretch my-1 w-px bg-gray-600"></div>
              </>
            )}
            <div className="mr-2 md:ml-0">
              {formatDate(
                data?.date?.start_date || data.createdTime,
                CONFIG.lang,
              )}
            </div>
          </div>
          <div className="flex items-center mb-4">
            {data.tags && (
              <div className="flex overflow-x-auto flex-nowrap gap-2 max-w-full">
                {data.tags.map((tag: string) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            )}
          </div>
          {data.thumbnail && (
            <div className="relative mb-7 w-full overflow-hidden rounded-3xl bg-gray-200 pb-[66%] lg:pb-[50%]">
              <Image
                src={data.thumbnail}
                className="object-cover"
                fill
                alt={data.title}
              />
            </div>
          )}
        </nav>
      )}
    </div>
  );
};

export default PostHeader;
