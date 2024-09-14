import Skeleton from "react-loading-skeleton";

const HomePostsSkeleton = () => {
  return (
    <section className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* skeleton card */}
      <div className="flex flex-col justify-between rounded-xl border p-2 shadow-sm">
        <div>
          <div className="relative h-52 max-w-full">
            <Skeleton className="h-full max-w-full" borderRadius={8} />
          </div>
          <Skeleton className="mt-4" />

          <Skeleton className="mt-1" />
          <Skeleton className="mt-1" />
        </div>
        <div className="mt-1 flex items-center gap-2">
          <Skeleton height={40} width={40} circle />
          <div>
            <Skeleton className="-mb-1" width={150} height={10} />
            <Skeleton className="-mt-1" width={150} height={10} />
          </div>
        </div>
      </div>

      {/* skeleton card */}
      <div className="flex flex-col justify-between rounded-xl border p-2 shadow-sm">
        <div>
          <div className="relative h-52 max-w-full">
            <Skeleton className="h-full max-w-full" borderRadius={8} />
          </div>
          <Skeleton className="mt-4" />

          <Skeleton className="mt-1" />
          <Skeleton className="mt-1" />
        </div>
        <div className="mt-1 flex items-center gap-2">
          <Skeleton height={40} width={40} circle />
          <div>
            <Skeleton className="-mb-1" width={150} height={10} />
            <Skeleton className="-mt-1" width={150} height={10} />
          </div>
        </div>
      </div>

      {/* skeleton card */}
      <div className="flex flex-col justify-between rounded-xl border p-2 shadow-sm">
        <div>
          <div className="relative h-52 max-w-full">
            <Skeleton className="h-full max-w-full" borderRadius={8} />
          </div>
          <Skeleton className="mt-4" />

          <Skeleton className="mt-1" />
          <Skeleton className="mt-1" />
        </div>
        <div className="mt-1 flex items-center gap-2">
          <Skeleton height={40} width={40} circle />
          <div>
            <Skeleton className="-mb-1" width={150} height={10} />
            <Skeleton className="-mt-1" width={150} height={10} />
          </div>
        </div>
      </div>

      {/* skeleton card */}
      <div className="flex flex-col justify-between rounded-xl border p-2 shadow-sm">
        <div>
          <div className="relative h-52 max-w-full">
            <Skeleton className="h-full max-w-full" borderRadius={8} />
          </div>
          <Skeleton className="mt-4" />

          <Skeleton className="mt-1" />
          <Skeleton className="mt-1" />
        </div>
        <div className="mt-1 flex items-center gap-2">
          <Skeleton height={40} width={40} circle />
          <div>
            <Skeleton className="-mb-1" width={150} height={10} />
            <Skeleton className="-mt-1" width={150} height={10} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePostsSkeleton;
