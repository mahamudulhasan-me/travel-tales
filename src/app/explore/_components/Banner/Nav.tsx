import { SignInFormModal } from "@/app/_authentication/SignInFormModal";
import Image from "next/image";
import Link from "next/link";

const ExploreNav = () => {
  const navItems = [
    {
      id: 1,
      title: "About Us",
      path: "/about-us",
    },
    {
      id: 2,
      title: "Contact",
      path: "/contact-us",
    },
  ];
  return (
    <nav className="container mx-auto  px-5 flex items-center justify-between bg-transparent z-50 absolute top-0 left-0 right-0 py-1">
      <aside className="flex items-center gap-x-6">
        <Link href={"/"}>
          <Image
            src={"/images/logo.png"}
            width={56}
            height={56}
            alt="Travel tales logo"
          />
        </Link>

        <ul className=" md:flex  items-center gap-x-4">
          {navItems.map((navItem) => (
            <li key={navItem.id} className="font-semibold">
              <Link
                href={navItem.path}
                className="text-gray-700 hover:text-primary text-sm transition-colors"
              >
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <SignInFormModal />
    </nav>
  );
};

export default ExploreNav;
