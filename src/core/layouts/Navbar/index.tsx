"use client";
import NavbarLink from "@/core/layouts/Navbar/NavbarLink";
import { ToggleTheme } from "@/core/theme";
const Navbar = () => {
  return (
    <nav className="sticky top-0 bg-transparent backdrop-blur-md z-20 transition-all duration-150 h-16 md:h-20">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="relative flex flex-row justify-between py-4 align-center md:py-6">
          <div className="flex items-center flex-1">
            <NavbarLink href="/" title={<span>Profixify</span>} />
          </div>
          <div className="flex justify-end items-center space-x-8">
            <NavbarLink href="/pricing" title="Pricing" />
            <NavbarLink href="/repair-status" title="Check Repair Status" />
            <NavbarLink href="/dashboard" title="Demo" />
            {/* TODO redirect to dashboard */}
            {/* <Link href="#">
              <HiUser />
            </Link> */}
            <ToggleTheme />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
