"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Resume", path: "/resume" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-7">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          className={`text-sm transition-colors ${
            link.path === pathname
              ? "text-accent font-medium"
              : "text-white/40 hover:text-white/70"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
