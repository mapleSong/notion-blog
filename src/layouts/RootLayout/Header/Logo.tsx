import Link from "next/link";

import { CONFIG } from "site.config";

const Logo = () => {
  return (
    <Link href="/" aria-label={CONFIG.blog.title} className="text-lg">
      TEST
    </Link>
  );
};

export default Logo;
