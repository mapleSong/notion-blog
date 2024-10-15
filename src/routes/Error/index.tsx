import React from 'react';

import { Emoji } from 'src/components/Emoji';

type Props = {};

const CustomError: React.FC<Props> = () => {
  return (
    <div className="mx-auto max-w-4xl rounded-3xl px-6 py-12">
      <div className="flex flex-col items-center gap-10 py-20">
        <div className="flex items-center text-6xl leading-none">
          <div>4</div>
          <Emoji>🤔</Emoji>
          <div>4</div>
        </div>
        <div className="text-3xl leading-9 text-gray-700">Post not found</div>
      </div>
    </div>
  );
};

export default CustomError;
