import { Skeleton } from "@/components/ui/skeleton";

export default function MateriaisLoading() {
  return (
    <div className="flex-1 p-6">
      <Skeleton className="h-8 w-48 mb-6" />
      <div className="space-y-4">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
      </div>
    </div>
  );
}
