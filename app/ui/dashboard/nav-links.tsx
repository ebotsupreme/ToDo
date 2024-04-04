"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLinks() {
  const pathname = usePathname();

  // Links for side navigation
  const links = [
    // { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Create", href: "/create" },
  ];

  return (
    <>
      {links.map((link) => (
        <Link key={link.name} href={link.href}>
          <p>{link.name}</p>
        </Link>
      ))}
    </>
  );
}
