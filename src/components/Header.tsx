"use client";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const routes = [
  { name: "Home", path: "/" },
  { name: "All Events", path: "/events/all" },
];

const Header = () => {
  const activePathname = usePathname();
  return (
    <header className="flex items-center justify-between border-b border-white/10 h-14 px-3 sm:px-9  ">
      <Link href="/">
        <Logo />
      </Link>

      <nav className="h-full">
        <ul className="flex gap-x-6 text-sm h-full">
          {routes.map((route) => (
            <li
              className={cn(" relative flex items-center hover:text-white transition", {
                "text-white": activePathname === route.path,
                "text-white/50": activePathname !== route.path,
              })}
              key={route.path}
            >
              <Link href={route.path}>{route.name}</Link>
              {activePathname === route.path && <motion.div layoutId="navLink" className="bg-accent h-1 w-full absolute bottom-0"></motion.div>}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
