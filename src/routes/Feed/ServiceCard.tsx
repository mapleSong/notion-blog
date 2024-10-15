import React from 'react';
import { AiFillCodeSandboxCircle } from 'react-icons/ai';

import { CONFIG } from 'site.config';
import { Emoji } from 'src/components/Emoji';

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null;
  return (
    <>
      <div className="mb-3 p-1">
        <Emoji>🌟</Emoji> Service
      </div>
      <div className="mb-9 flex flex-col rounded-xl bg-white p-1 dark:bg-[rgb(40,40,40)]">
        {CONFIG.projects.map((project, idx) => (
          <a
            key={idx}
            href={`${project.href}`}
            rel="noreferrer"
            target="_blank"
            className="flex cursor-pointer items-center gap-3 rounded-xl p-3 text-gray-700 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100"
          >
            <AiFillCodeSandboxCircle className="text-2xl leading-8" />
            <div className="text-sm leading-5">{project.name}</div>
          </a>
        ))}
      </div>
    </>
  );
};

export default ServiceCard;
