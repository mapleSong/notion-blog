import React from 'react';

import usePostQuery from 'src/hooks/usePostQuery';

import NotionRenderer from '../components/NotionRenderer';

type Props = {};

const PageDetail: React.FC<Props> = () => {
  const data = usePostQuery();

  if (!data) return null;
  return (
    <div className="mx-auto max-w-4xl">
      <NotionRenderer recordMap={data.recordMap} />
    </div>
  );
};

export default PageDetail;
