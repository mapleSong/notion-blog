import React from 'react';

import { useRouter } from 'next/router';

type Props = {};

const Footer: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <div className="flex justify-between font-medium">
      <a
        className="mt-2 cursor-pointer hover:text-gray-800"
        onClick={() => router.push('/')}
      >
        ← Back
      </a>
      <a
        className="mt-2 cursor-pointer hover:text-gray-800"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑ Top
      </a>
    </div>
  );
};

export default Footer;
