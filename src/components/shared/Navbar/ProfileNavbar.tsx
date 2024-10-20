"use client";
import { useState } from "react";

const ProfileNavbar = () => {
  const [active, setActive] = useState(0);

  const tabs = [
    "Feed",
    "About",
    "Photos",
    "Videos",
    "Friends",
    "Groups",
    "More",
  ];

  return (
    <div className="px-5 mt-2 mb-5">
      <ul className="flex items-center gap-x-3 bg-white mb-4 text-gray-800 font-semibold">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`cursor-pointer py-2 px-3 transition-all duration-300 ease-in-out ${
              index === active
                ? "border-b-[3px] border-primary text-primary"
                : "bg-white text-gray-800 border-b-[3px] border-white"
            }
            `}
            onClick={() => setActive(index)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileNavbar;
