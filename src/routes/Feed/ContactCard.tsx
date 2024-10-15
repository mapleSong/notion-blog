import React from 'react';
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from 'react-icons/ai';

import { CONFIG } from 'site.config';
import { Emoji } from 'src/components/Emoji';

const ContactCard: React.FC = () => {
  return (
    <>
      <div className="mb-3 p-1">
        <Emoji>💬</Emoji> Contact
      </div>
      <div className="flex flex-col rounded-xl bg-white p-1 dark:bg-[rgb(40,40,40)]">
        {CONFIG.profile.github && (
          <a
            href={`https://github.com/${CONFIG.profile.github}`}
            rel="noreferrer"
            target="_blank"
            className="flex items-center gap-3 rounded-xl p-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100"
          >
            <AiOutlineGithub className="text-2xl leading-8" />
            <div className="text-sm leading-5">github</div>
          </a>
        )}
        {CONFIG.profile.instagram && (
          <a
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            rel="noreferrer"
            target="_blank"
            className="flex items-center gap-3 rounded-xl p-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100"
          >
            <AiOutlineInstagram className="text-2xl leading-8" />
            <div className="text-sm leading-5">instagram</div>
          </a>
        )}
        {CONFIG.profile.email && (
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
            className="flex items-center gap-3 rounded-xl p-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100"
          >
            <AiOutlineMail className="text-2xl leading-8" />
            <div className="text-sm leading-5">email</div>
          </a>
        )}
        {CONFIG.profile.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            rel="noreferrer"
            target="_blank"
            className="flex items-center gap-3 rounded-xl p-3 text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-100"
          >
            <AiFillLinkedin className="text-2xl leading-8" />
            <div className="text-sm leading-5">linkedin</div>
          </a>
        )}
      </div>
    </>
  );
};

export default ContactCard;
