import { Skeleton } from "@/components/ui/skeleton";

export default function AulasLoading() {
  return (
    <div className="flex-1 p-6">
      <Skeleton className="h-8 w-48 mb-6" />
      <div className="space-y-4">
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-32 w-full" />
      </div>
    </div>
  );
}
