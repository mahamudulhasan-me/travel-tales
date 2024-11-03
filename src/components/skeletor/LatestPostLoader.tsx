import { Skeleton } from "../ui/skeleton";

const LatestPostLoader = () => {
  return (
    <div className="space-y-2">
      <Skeleton className="h-5 w-[250px]" />
      <Skeleton className="h-4 w-[150px]" />
    </div>
  );
};

export default LatestPostLoader;
