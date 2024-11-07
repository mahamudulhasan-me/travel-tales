import { footerListItems } from "@/app/(mainLayout)/@Profile/layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-1 border-t">
      <div className="flex flex-wrap gap-x-8 gap-y-1 justify-center text-gray-700">
        {footerListItems.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className="hover:text-primary transition-colors"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <p className="block text-center  text-gray-700 ">
        &copy; 2024 Travel Tales
      </p>
    </footer>
  );
};

export default Footer;
