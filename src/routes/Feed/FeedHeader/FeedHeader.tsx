import React from "react";

import { TCategories } from "src/types";

import CategorySelect from "./CategorySelect";
import OrderButtons from "./OrderButtons";

type Props = {};

const FeedHeader: React.FC<Props> = () => {
  return (
    <div className="mb-4 flex items-center justify-between border-b border-[rgb(226,226,226)]">
      <CategorySelect />
      <OrderButtons />
    </div>
  );
};

export default FeedHeader;
