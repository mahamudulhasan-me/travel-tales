import { ReactNode } from "react";

import { Navbar } from "@/src/components/ui/navbar";

const layout = ({
  children,
  RecentPosts,
  StaticComponent,
}: {
  children: ReactNode;
  RecentPosts: ReactNode;
  StaticComponent: ReactNode;
}) => {
  return (
    <>
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <main>
          {children}
          {RecentPosts}
          {StaticComponent}
        </main>
      </div>
    </>
  );
};

export default layout;
