import { CheckCircle, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CardProps = {
  id: number;
  title: string;
  imageSrc: string;
  lessonsLength: number;
  unitsLength: number;
  progress: number;
  activeCourseId?: number | null;
};

export const Card = ({
  id,
  title,
  imageSrc,
  lessonsLength,
  unitsLength,
  progress,
  activeCourseId,
}: CardProps) => {
  return (
    <Link href={`/learn`}>
      <div className="group relative p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-slate-200 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <div className="flex items-center justify-center rounded-md bg-blue-600 p-1.5">
              <Image src={imageSrc} alt={title} height={28} width={28} />
            </div>
            <div className="flex flex-col gap-y-1">
              <h3 className="font-bold text-neutral-700 text-lg lg:text-base">
                {title}
              </h3>
              <div className="flex items-center gap-x-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-x-1">
                  <Clock className="h-4 w-4" />
                  {lessonsLength}
                </div>
                <div className="flex items-center gap-x-1">
                  <CheckCircle className="h-4 w-4" />
                  {unitsLength}
                </div>
              </div>
            </div>
          </div>
          <Button
            size="sm"
            variant={activeCourseId === id ? "default" : "secondary"}
            className={cn(
              "transition-all duration-300",
              activeCourseId === id
                ? "bg-blue-500 hover:bg-blue-600"
                : "hover:bg-blue-500 hover:text-white"
            )}
          >
            {activeCourseId === id ? "Continue" : "Start"}
          </Button>
        </div>
        <div className="flex items-center gap-x-2 mt-4">
          <div className="flex-1">
            <div className="flex items-center gap-x-2">
              <div className="text-xs text-muted-foreground">
                {progress}% Complete
              </div>
            </div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
