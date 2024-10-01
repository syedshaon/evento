import React from "react";
import Link from "next/link";
const routes = [
  { path: "/terms-conditions", name: "Terms and Conditions" },
  { path: "/privacy-policy", name: "Privacy Policy" },
];

const Footer = () => {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small>
        &copy; {new Date().getFullYear()} <a href="https://www.example.com">ButeGrad. All rights reserved.</a>
      </small>
      <ul className="flex gap-x-3 lg:gap-x-8 ml-auto items-center">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
