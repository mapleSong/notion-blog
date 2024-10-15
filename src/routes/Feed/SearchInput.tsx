import React, { InputHTMLAttributes } from 'react';

import { Emoji } from 'src/components/Emoji';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <div className="mb-4 md:mb-8">
      <div className="mb-3 p-1">
        <Emoji>🔎</Emoji> Search
      </div>
      <input
        className="w-full rounded-xl bg-[rgb(237,237,237)] px-5 py-2 outline-none dark:bg-[rgb(40,40,40)]"
        type="text"
        placeholder="Search Keyword..."
        {...props}
      />
    </div>
  );
};

export default SearchInput;
