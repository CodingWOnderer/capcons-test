"use client";
import { cn } from "@/lib/utils";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import React from "react";
import { HouseIcon } from "./HomeIcon";

type IconComponentType = React.ElementType<{ className?: string }>;

interface MenuDockItem {
  label: string;
  icon?: IconComponentType;
  href?: string;
}

const defaultItems: MenuDockItem[] = [
  { label: "home", icon: HouseIcon, href: "/" },
  { label: "Search", icon: MagnifyingGlassIcon, href: "/search" },
  { label: "NEW", href: "/collections?new_arrival=true" },
  { label: "Cart", icon: ShoppingBagIcon, href: "/cart" },
  { label: "Profile", icon: UserIcon, href: "/user" },
];

export default function MenuDockStatic() {
  return (
    <nav
      className={cn(
        "fixed bottom-0 z-50 sm:hidden inset-x-0 justify-between bg-gray-100 shadow-sm safe-area-bottom"
      )}
      style={{ willChange: "transform", transform: "translateZ(0)" }}
    >
      <div className="grid h-16 shadow-sm bg-white grid-cols-5 mx-auto">
        {defaultItems.map((item, index) => {
          if (item.label === "NEW") {
            return (
              <a
                key="new"
                className="flex justify-center cursor-pointer items-center"
                href={item.href!}
              >
                <button
                  className={cn(
                    "relative flex flex-col items-center justify-center rounded-lg transition-all duration-200",
                    "hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  )}
                  aria-label="NEW"
                  type="button"
                >
                  <div className="flex items-center justify-center text-black transition-all duration-200">
                    <span className="text-sm font-light">NEW</span>
                  </div>
                </button>
              </a>
            );
          }

          if (item.icon) {
            const IconComponent = item.icon;
            return (
              <a
                key={`${item.label}-${index}`}
                href={item.href ?? "#"}
                className="flex justify-center items-center"
              >
                <button
                  className={cn(
                    "relative flex flex-col items-center justify-center rounded-lg transition-all duration-200",
                    "hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  )}
                  aria-label={item.label}
                  type="button"
                >
                  <div className="flex items-center justify-center text-black transition-all duration-200">
                    <IconComponent
                      strokeWidth={1}
                      className="transition-colors text-black size-6 duration-200"
                    />
                  </div>
                </button>
              </a>
            );
          }

          return null;
        })}
      </div>
    </nav>
  );
}
