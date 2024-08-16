"use client";
import React, { useState } from "react";
import { Nav } from "./ui/nav";
import {
  AlertCircle,
  Archive,
  ArchiveX,
  ChevronRight,
  File,
  Inbox,
  LayoutDashboard,
  MessagesSquare,
  Search,
  Send,
  Settings,
  ShoppingCart,
  Trash2,
  UserRound,
  Users2,
} from "lucide-react";
import { Button } from "./ui/button";
import { useWindowWidth } from "@react-hook/window-size";

export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  return (
    <div className="relative min-w-[80px] border-r px-3 pb-10 pt-24">
      {/* Collapse Button */}
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            variant="secondary"
            className="rounded-full p-2"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      {/* Nav links */}
      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/users",
            icon: UserRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Setings",
            href: "/settings",
            icon: Settings,
            variant: "ghost",
          },
        ]}
      />
    </div>
  );
}
