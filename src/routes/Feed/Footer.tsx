import React from "react";

import { CONFIG } from "site.config";

const d = new Date();
const y = d.getFullYear();
const from = +CONFIG.since;

type Props = {
  className?: string;
};

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <a
        href={`https://github.com/${CONFIG.profile.github}`}
        target="_blank"
        rel="noreferrer"
        className="mt-3 text-sm leading-5"
      >
        © {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}
      </a>
    </div>
  );
};

export default Footer;
