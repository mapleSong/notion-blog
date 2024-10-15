import React from 'react';

import Image from 'next/image';

import { CONFIG } from 'site.config';

type Props = {
  className?: string;
};

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <div className="block lg:hidden">
      <div className="mb-3 p-1">💻 Profile</div>
      <div className="mb-4 rounded-xl bg-white p-2 dark:bg-[rgb(40,40,40)]">
        <div className="flex items-center gap-2">
          <Image
            src={CONFIG.profile.image}
            width={90}
            height={90}
            className="relative"
            alt="profile_image"
          />
          <div className="flex flex-col">
            <div className="text-xl font-bold italic leading-7">
              {CONFIG.profile.name}
            </div>
            <div className="mb-2 text-sm leading-5 dark:text-gray-400">
              {CONFIG.profile.role}
            </div>
            <div className="text-sm leading-5">{CONFIG.profile.bio}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProfileCard;
