import {
  IconBowlChopsticks,
  IconCategoryFilled,
  IconLayoutDashboardFilled,
  IconQrcode,
  IconSettingsFilled,
  IconSoupFilled,
} from "@tabler/icons-react";

import Image from "next/image";
import Link from "next/link";
import cx from "classnames";

// Navigation structure
const nav = [
  {
    section: "Restaurant",
    items: [
      {
        label: "Restaurants",
        href: "/restaurants",
        icon: <IconSoupFilled size={20} />,
        active: false,
      },
      {
        label: "Menus",
        href: "/menus",
        icon: <IconBowlChopsticks size={20} />,
        active: false,
      },
      {
        label: "Categories",
        href: "/categories",
        icon: <IconCategoryFilled size={20} />,
        active: false,
      },
    ],
  },
  {
    section: "Orders",
    items: [
      {
        label: "QR Codes",
        href: "/orders",
        icon: <IconQrcode size={20} />,
        active: false,
      },
      {
        label: "Settings",
        href: "/settings",
        icon: <IconSettingsFilled size={20} />,
        active: false,
      },
    ],
  },
];

// Sidebar component
const Sidebar = () => {
  return (
    <aside className="w-64 h-[100dvh] bg-gray-50 border-r border-gray-200 flex flex-col p-4">
      {/* Brand Logo */}
      <div className="flex items-center gap-2 w-full">
        <Image src={"/logo.svg"} width={40} height={30} alt="Scannic" />
        <div className="flex flex-col items-start">
          <h1 className="font-extrabold text-xl ">Scannic</h1>
          <p className="text-gray-500 text-xs font-semibold">Make it now.</p>
        </div>
      </div>
      {/* Navigation */}
      <nav className="mt-6 flex flex-col gap-6">
        {/* Dashboard Link */}
        <Link
          href="/"
          className={cx(
            "flex items-center gap-2 p-2 rounded-lg font-semibold text-gray-700 w-full hover:bg-primary/5",
            true && "bg-primary/10 !text-primary font-bold"
          )}
        >
          <span className={cx("text-gray-400", true && "!text-primary")}>
            <IconLayoutDashboardFilled size={20} />
          </span>
          <span className="text-sm">Dashboard</span>
        </Link>

        {/* Dynamic Sections */}
        {nav.map((section) => (
          <div key={section.section} className="w-full">
            {/* Section Header */}
            <h2 className="uppercase font-medium tracking-wider mb-2 text-xs text-gray-400">
              {section.section}
            </h2>
            <div className="flex flex-col gap-1">
              {section.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cx(
                    "flex items-center gap-2 p-2 rounded-lg font-semibold text-gray-700 w-full hover:bg-primary/5",
                    item.active && "bg-primary/10 !text-primary font-bold"
                  )}
                >
                  <span
                    className={cx(
                      "text-gray-400",
                      item.active && "!text-primary"
                    )}
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
