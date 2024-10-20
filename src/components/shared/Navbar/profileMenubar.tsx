"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";

export function ProfileMenubar() {
  return (
    <Menubar>
      <MenubarMenu>
        {/* Main Profile trigger with avatar */}
        <MenubarTrigger className="">
          <Image
            src="/icons/avatar.png"
            width={40}
            height={40}
            alt="avatar"
            className="rounded-sm"
          />
        </MenubarTrigger>

        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>New Window</MenubarItem>
          <MenubarSeparator />

          {/* Submenu */}
          <MenubarSub>
            <MenubarSubTrigger>More Options</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Share</MenubarItem>
              <MenubarItem>Export</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Preferences</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>

          <MenubarSeparator />
          <MenubarItem>Print</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
