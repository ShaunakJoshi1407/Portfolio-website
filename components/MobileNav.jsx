"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Resume", path: "/resume" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[28px] text-white/70" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-primary border-white/10">
        <div className="mt-14 mb-12">
          <Link href="/">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Shaunak Joshi
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-6">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`text-lg transition-colors ${
                link.path === pathname
                  ? "text-accent font-medium"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
