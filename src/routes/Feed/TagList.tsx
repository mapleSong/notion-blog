import React from "react";

import { useRouter } from "next/router";

import { Emoji } from "src/components/Emoji";
import { useTagsQuery } from "src/hooks/useTagsQuery";

type Props = {};

const TagList: React.FC<Props> = () => {
  const router = useRouter();
  const currentTag = router.query.tag || undefined;
  const data = useTagsQuery();

  const handleClickTag = (value: any) => {
    // delete
    if (currentTag === value) {
      router.push({
        query: {
          ...router.query,
          tag: undefined,
        },
      });
    }
    // add
    else {
      router.push({
        query: {
          ...router.query,
          tag: value,
        },
      });
    }
  };

  return (
    <div className="p-4">
      <div className="mb-3 hidden p-1 lg:block">
        <Emoji>🏷️</Emoji> Tags
      </div>
      <div className="scrollbar-hide mb-6 flex gap-1 overflow-scroll lg:block">
        {Object.keys(data).map((key) => (
          <a
            key={key}
            data-active={key === currentTag}
            onClick={() => handleClickTag(key)}
            className={`my-1 block flex-shrink-0 cursor-pointer rounded-lg p-1 px-4 text-sm leading-5 ${
              key === currentTag
                ? "bg-gray-200 text-gray-800"
                : "hover:bg-gray-200"
            }`}
          >
            {key}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TagList;
