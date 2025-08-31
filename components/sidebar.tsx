"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarItem } from "./sidebar-item";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const pathname = usePathname();

  const routes = [
    {
      label: "TRILHA DE APRENDIZADO",
      iconSrc: "/learn.svg",
      href: "/learn",
    },
    {
      label: "LEADERBOARD",
      iconSrc: "/leaderboard.svg",
      href: "/leaderboard",
    },
    {
      label: "QUESTS",
      iconSrc: "/quests.svg",
      href: "/quests",
    },
    {
      label: "SHOP",
      iconSrc: "/shop.svg",
      href: "/shop",
    },
    {
      label: "COURSES",
      iconSrc: "/learn.svg",
      href: "/courses",
    },
  ];

  return (
    <div className={cn("left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]", className)}>
      <Link href="/learn">
        <div className="flex items-center gap-x-3 pb-7 pl-4 pt-8">
          <Image src="/mascot.svg" alt="Mascot" height={40} width={40} />

          <h1 className="text-2xl font-extrabold tracking-wide text-blue-600">
            Professor IA
          </h1>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-y-2">
        {routes.map((route) => (
          <SidebarItem
            key={route.href}
            label={route.label}
            iconSrc={route.iconSrc}
            href={route.href}
          />
        ))}
      </div>

      <div className="p-4">
        {/* Botão de usuário mockado para visualização */}
        <div className="flex items-center gap-x-2 rounded-lg bg-gray-100 p-3">
          <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-white font-bold text-sm">U</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900">User Demo</span>
            <span className="text-xs text-gray-500">Demo Account</span>
          </div>
        </div>
      </div>
    </div>
  );
};
