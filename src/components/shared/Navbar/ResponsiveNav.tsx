"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NavListItems from "./NavListItems";
import ProtectedNavItems from "./ProtectedNavItems";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export default function ResponsiveNav() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">
          <AlignJustify />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-4">
        <Link href={"/"} className="flex items-center">
          <Image
            src={"/images/logo.png"}
            width={46}
            height={46}
            alt="Travel tales logo"
          />
          <h2 className="uppercase font-semibold ">Travel Tales</h2>
        </Link>
        <ul className="p-4 flex flex-col-reverse gap-2">
          <NavListItems />
          <ProtectedNavItems />
        </ul>
      </DrawerContent>
    </Drawer>
  );
}
