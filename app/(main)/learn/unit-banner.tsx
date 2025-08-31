import { Calendar, NotebookText } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

type UnitBannerProps = {
  title: string;
  description: string;
};

export const UnitBanner = ({ title, description }: UnitBannerProps) => {
  return (
    <div className="flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-5 text-white mt-4 shadow-lg">
      <div className="space-y-1.5">
        <h3 className="text-xl font-extrabold tracking-wide flex items-center gap-2">
          <Calendar className="h-6 w-6" />
          Agendar uma aula
        </h3>
      </div>

      <Link href="/lesson">
        <Button
          size="lg"
          variant="secondary"
          className="hidden border-2 border-b-4 active:border-b-2 xl:flex"
        >
          <NotebookText className="mr-2" />
          Nova Aula
        </Button>
      </Link>
    </div>
  );
};
