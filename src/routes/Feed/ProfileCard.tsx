import React from 'react';

import Image from 'next/image';

import { CONFIG } from 'site.config';
import { Emoji } from 'src/components/Emoji';

type Props = {};

const ProfileCard: React.FC<Props> = () => {
  return (
    <div className="mb-3 p-1">
      <div className="mb-3 p-1">
        <Emoji>💻</Emoji> Profile
      </div>
      <div className="mb-9 w-full rounded-xl bg-white dark:bg-[rgb(40,40,40)] md:p-4 lg:p-4">
        <div className="pb-full relative w-full">
          <Image src={CONFIG.profile.image} fill alt="" />
        </div>
        <div className="flex flex-col items-center p-2">
          <div className="text-xl font-bold italic leading-7">
            {CONFIG.profile.name}
          </div>
          <div className="mb-4 text-sm leading-5 text-gray-700 dark:text-gray-400">
            {CONFIG.profile.role}
          </div>
          <div className="mb-2 text-sm leading-5">{CONFIG.profile.bio}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
