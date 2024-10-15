import React from 'react';

import { useRouter } from 'next/router';

import { COLOR_SET } from './constants';

export const getColorClassByName = (name: string): string => {
  try {
    let sum = 0;
    name.split('').forEach((alphabet) => (sum = sum + alphabet.charCodeAt(0)));
    const colorKey = sum
      .toString(16)
      ?.[sum.toString(16).length - 1].toUpperCase();
    return COLOR_SET[colorKey];
  } catch {
    return COLOR_SET[0];
  }
};

type Props = {
  children: string;
  readOnly?: boolean;
};

const Category: React.FC<Props> = ({ readOnly = false, children }) => {
  const router = useRouter();

  const handleClick = (value: string) => {
    if (readOnly) return;
    router.push(`/?category=${value}`);
  };
  return (
    <div
      onClick={() => handleClick(children)}
      className={`w-fit rounded-full pb-1 pl-2 pr-2 pt-1 text-sm leading-5 text-gray-700 opacity-90 ${readOnly ? 'cursor-default' : 'cursor-pointer'} dark:text-[rgb(22,22,22)]`}
      style={{ backgroundColor: getColorClassByName(children) }}
    >
      {children}
    </div>
  );
};

export default Category;
