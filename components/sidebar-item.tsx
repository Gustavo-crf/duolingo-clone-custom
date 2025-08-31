"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";

type SidebarItemProps = {
  label: string;
  iconSrc: string;
  href: string;
};

export const SidebarItem = ({ label, iconSrc, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const isAulas = label === "AULAS";
  
  // Para o botão AULAS, considerar ativo também quando estiver em /learn
  const isAulasActive = isAulas && (isActive || pathname === "/learn" || pathname.startsWith("/learn"));

  return (
    <Button
      variant={
        isAulasActive
          ? "sidebarGreen" 
          : isActive 
            ? "sidebarOutline" 
            : "sidebar"
      }
      className="h-[52px] justify-start text-gray-800"
      asChild
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          className="mr-5"
          height={32}
          width={32}
        />
        {label}
      </Link>
    </Button>
  );
};
