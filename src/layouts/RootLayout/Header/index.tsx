import { zIndexes } from "src/styles/zIndexes";

import Logo from "./Logo";
import NavBar from "./NavBar";
import ThemeToggle from "./ThemeToggle";

type Props = {
  fullWidth: boolean;
};

const Header: React.FC<Props> = ({ fullWidth }) => {
  return (
    <div
      className={`sticky top-0 bg-[rgb(248,248,248)] shadow-sm z-${zIndexes.header} dark:bg-[hsl(0,0%,11.0%)]`}
    >
      <div
        data-full-width={fullWidth}
        className={`mx-auto flex h-12 w-full items-center justify-between px-4 ${
          fullWidth ? "md:px-24" : ""
        } max-w-screen-lg`}
      >
        <Logo />
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default Header;
