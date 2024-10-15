import Link from "next/link";

const NavBar: React.FC = () => {
  const links = [{ id: 1, name: "About", to: "/about" }];
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map((link) => (
          <li
            key={link.id}
            className="ml-4 text-gray-700 dark:text-[rgb(160,160,160)]"
          >
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
