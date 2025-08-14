import Image from "next/image";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
const PageCover = ({ image, title }: { title: string; image?: string }) => {
  return (
    <div className="w-screen relative mt-1">
      <Image
        src={image || "/images/cover.jpg"}
        alt={`Travel tales - ${title}`}
        className="w-full h-80 object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute bg-slate-900/50 inset-0 flex flex-col justify-center items-center ">
        <div className="relative flex flex-col justify-center items-center mb-10">
          <h1
            className={`text-center text-white font-semibold text-4xl capitalize tracking-wide`}
          >
            {title}
          </h1>
          <div className="w-24 h-0.5 bg-primary"></div>
        </div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="text-slate-50">
              <BreadcrumbLink asChild>
                <Link href="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-white" />
            <BreadcrumbItem className="text-slate-100">
              <BreadcrumbPage>{title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default PageCover;
