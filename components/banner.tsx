"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

const BANNER_KEY = "hide-professor-ia-banner";

export const Banner = ({
  hide,
  setHide,
}: {
  hide: boolean;
  setHide: (hide: boolean) => void;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isHidden = localStorage.getItem(BANNER_KEY);
    if (!isHidden) {
      setIsVisible(true);
    }
  }, []);

  const onClose = () => {
    setIsVisible(false);
    setHide(true);
    localStorage.setItem(BANNER_KEY, "true");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex w-full items-center justify-center gap-2 bg-red-500 p-4 text-center text-sm font-medium text-white">
      <div className="flex items-center gap-2">
        <span>⚠️</span>
        <span>
          Account creation is currently not working due to Clerk's 500-user limit.
          To try it out, please fork this repo or Contact me for access.
        </span>
      </div>
      <Button
        variant="ghost"
        size="sm"
        onClick={onClose}
        className="h-auto p-1 text-white hover:bg-white/20"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
};
