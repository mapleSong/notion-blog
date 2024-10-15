import React from 'react';

import { useRouter } from 'next/router';

type TOrder = 'asc' | 'desc';

type Props = {};

const OrderButtons: React.FC<Props> = () => {
  const router = useRouter();

  const currentOrder = `${router.query.order || ``}` || ('desc' as TOrder);

  const handleClickOrderBy = (value: TOrder) => {
    router.push({
      query: {
        ...router.query,
        order: value,
      },
    });
  };
  return (
    <div className="flex gap-2 text-sm leading-5 text-[rgb(126,126,126)]">
      <a
        className={`cursor-pointer ${currentOrder === 'desc' ? 'font-bold text-[rgb(23,23,23)] dark:text-[rgb(237,237,237)]' : ''}`}
        onClick={() => handleClickOrderBy('desc')}
      >
        Desc
      </a>
      <a
        className={`cursor-pointer ${currentOrder === 'asc' ? 'font-bold text-[rgb(23,23,23)] dark:text-[rgb(237,237,237)]' : ''}`}
        onClick={() => handleClickOrderBy('asc')}
      >
        Asc
      </a>
    </div>
  );
};

export default OrderButtons;
