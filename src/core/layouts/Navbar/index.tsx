"use client";
import { ToggleTheme } from "@/core/theme";
import { cn } from "@/core/utils";
import { useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import NavbarLink from "./NavbarLink";
const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4 sticky top-0 bg-transparent backdrop-blur-md">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <NavbarLink href="/" title={<span>Profixify</span>} />
          <div className="sm:hidden flex items-center gap-3">
            <ToggleTheme />
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
              data-hs-collapse="#navbar-with-collapse"
              aria-controls="navbar-with-collapse"
              aria-label="Toggle navigation"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              {isOpenMenu ? <CgClose /> : <CgMenu />}
            </button>
          </div>
        </div>
        <div
          id="navbar-with-collapse"
          className={cn(
            "hidden transition-all duration-[0.1ms] overflow-hidden basis-full grow sm:block",
            isOpenMenu ? "block" : "hidden"
          )}
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            <NavbarLink href="/pricing" title="Pricing" />
            <NavbarLink href="/repair-status" title="Repair Status" />
            <NavbarLink href="/dashboard" title="Demo" />
            <span className="xs:hidden sm:block">
              <ToggleTheme />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
