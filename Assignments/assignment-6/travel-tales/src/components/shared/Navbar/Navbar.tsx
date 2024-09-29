import { SignInFormModal } from "@/app/_authentication/SignInFormModal";
import Image from "next/image";
import Link from "next/link";
const navItems = [
  {
    id: 1,
    title: "About Us",
    path: "/about-us",
    isPrivate: false,
  },
  {
    id: 2,
    title: "Contact",
    path: "/contact",
    isPrivate: false,
  },
];
const Navbar = () => {
  return (
    <nav className="bg-white py-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
      <div className="container mx-auto px-5 flex items-center justify-between">
        <aside>
          <div className="flex items-center">
            <Image
              src={"/images/logo.png"}
              width={56}
              height={56}
              alt="Travel tales logo"
            />
            <h2 className="uppercase font-semibold text-xl">Travel Tales</h2>
          </div>
        </aside>
        <aside>
          <ul className="flex items-center">
            {navItems.map((navItem) => (
              <li key={navItem.id} className="mr-4">
                <Link href={navItem.path} className="">
                  {navItem.title}
                </Link>
              </li>
            ))}
            <li>
              <SignInFormModal />
            </li>
          </ul>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
