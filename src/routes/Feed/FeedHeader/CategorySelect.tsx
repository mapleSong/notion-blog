import React from "react";
import { MdExpandMore } from "react-icons/md";

import { useRouter } from "next/router";

import { DEFAULT_CATEGORY } from "src/constants";
import { useCategoriesQuery } from "src/hooks/useCategoriesQuery";
import useDropdown from "src/hooks/useDropdown";

type Props = {};

const CategorySelect: React.FC<Props> = () => {
  const router = useRouter();
  const data = useCategoriesQuery();
  const [dropdownRef, opened, handleOpen] = useDropdown();

  const currentCategory = `${router.query.category || ``}` || DEFAULT_CATEGORY;

  const handleOptionClick = (category: string) => {
    router.push({
      query: {
        ...router.query,
        category,
      },
    });
  };
  return (
    <div className="relative">
      <div
        ref={dropdownRef}
        className="mb-2 mt-2 flex cursor-pointer items-center gap-1 text-xl font-bold"
        onClick={handleOpen}
      >
        {currentCategory} Posts <MdExpandMore />
      </div>
      {opened && (
        <div className="absolute z-40 rounded-xl bg-gray-200 p-1 text-gray-900 shadow-lg">
          {Object.keys(data).map((key, idx) => (
            <div
              className="cursor-pointer whitespace-nowrap rounded-xl p-1 pl-2 pr-2 text-sm hover:bg-gray-400"
              key={idx}
              onClick={() => handleOptionClick(key)}
            >
              {`${key} (${data[key]})`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySelect;
