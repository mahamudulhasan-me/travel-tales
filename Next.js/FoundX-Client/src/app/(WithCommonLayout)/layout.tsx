import { ReactNode } from "react";

import { Navbar } from "@/src/components/ui/navbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
};

export default layout;
