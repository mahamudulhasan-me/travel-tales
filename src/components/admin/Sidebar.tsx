"use client";
import {
  ChartNoAxesCombined,
  LayoutDashboard,
  SquareChartGantt,
  UserRoundCog,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname(); // Get the current route path

  const listItems = [
    {
      id: 1,
      title: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      id: 2,
      title: "Manage Users",
      path: "/dashboard/manage-user",
      icon: <UserRoundCog />,
    },
    {
      id: 3,
      title: "Manage Posts",
      path: "/dashboard/manage-post",
      icon: <SquareChartGantt />,
    },
    {
      id: 4,
      title: "Analytics",
      path: "/dashboard/analytics",
      icon: <ChartNoAxesCombined />,
    },
  ];

  return (
    <div className="h-full bg-slate-900 pt-10">
      <ul className="flex flex-col gap-2 p-2 text-white font-semibold text-lg">
        {listItems.map((item) => {
          const isActive = pathname === item.path; // Check if the current path matches the link's path
          return (
            <Link
              href={item.path}
              key={item.id}
              className={`flex items-center gap-2 rounded-md p-2 transition-colors ${
                isActive ? "bg-primary text-white" : "hover:bg-primary"
              }`}
            >
              {item.icon}
              {item.title}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
