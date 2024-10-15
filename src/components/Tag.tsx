import React from 'react';

import { useRouter } from 'next/router';

type Props = {
  children: string;
};

const Tag: React.FC<Props> = ({ children }) => {
  const router = useRouter();

  const handleClick = (value: string) => {
    router.push(`/?tag=${value}`);
  };
  return (
    <div
      className="cursor-pointer rounded-full bg-gray-200 pb-1 pl-2 pr-2 pt-1 text-xs font-normal text-[rgb(126,126,126)] dark:bg-[rgb(46,46,46)]"
      onClick={() => handleClick(children)}
    >
      {children}
    </div>
  );
};

export default Tag;
