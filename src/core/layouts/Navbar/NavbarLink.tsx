import { cn } from "@/core/utils";
import Link from "next/link";

interface NavbarLinkProps {
  href: string;
  title: string | React.ReactNode;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ href, title }) => {
  return (
    <Link
      className={cn(
        "inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer rounded-md p-1"
      )}
      href={href}
    >
      {title}
    </Link>
  );
};

export default NavbarLink;
