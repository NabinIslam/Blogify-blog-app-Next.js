import Skeleton from 'react-loading-skeleton';

const Loading = () => (
  <section className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-10">
    
    {/* skeleton card */}
    <div className="border shadow-sm p-2 rounded-xl flex flex-col justify-between">
      <div>
        <div className="relative h-52 max-w-full">
          <Skeleton className="max-w-full h-full" borderRadius={8} />
        </div>
        <Skeleton className="mt-4" />

        <Skeleton className="mt-1" />
        <Skeleton className="mt-1" />
      </div>
      <div className="flex items-center gap-2 mt-1">
        <Skeleton height={40} width={40} circle />
        <div>
          <Skeleton className="-mb-1" width={150} height={10} />
          <Skeleton className="-mt-1" width={150} height={10} />
        </div>
      </div>
    </div>

    {/* skeleton card */}
    <div className="border shadow-sm p-2 rounded-xl flex flex-col justify-between">
      <div>
        <div className="relative h-52 max-w-full">
          <Skeleton className="max-w-full h-full" borderRadius={8} />
        </div>
        <Skeleton className="mt-4" />

        <Skeleton className="mt-1" />
        <Skeleton className="mt-1" />
      </div>
      <div className="flex items-center gap-2 mt-1">
        <Skeleton height={40} width={40} circle />
        <div>
          <Skeleton className="-mb-1" width={150} height={10} />
          <Skeleton className="-mt-1" width={150} height={10} />
        </div>
      </div>
    </div>

    {/* skeleton card */}
    <div className="border shadow-sm p-2 rounded-xl flex flex-col justify-between">
      <div>
        <div className="relative h-52 max-w-full">
          <Skeleton className="max-w-full h-full" borderRadius={8} />
        </div>
        <Skeleton className="mt-4" />

        <Skeleton className="mt-1" />
        <Skeleton className="mt-1" />
      </div>
      <div className="flex items-center gap-2 mt-1">
        <Skeleton height={40} width={40} circle />
        <div>
          <Skeleton className="-mb-1" width={150} height={10} />
          <Skeleton className="-mt-1" width={150} height={10} />
        </div>
      </div>
    </div>

    {/* skeleton card */}
    <div className="border shadow-sm p-2 rounded-xl flex flex-col justify-between">
      <div>
        <div className="relative h-52 max-w-full">
          <Skeleton className="max-w-full h-full" borderRadius={8} />
        </div>
        <Skeleton className="mt-4" />

        <Skeleton className="mt-1" />
        <Skeleton className="mt-1" />
      </div>
      <div className="flex items-center gap-2 mt-1">
        <Skeleton height={40} width={40} circle />
        <div>
          <Skeleton className="-mb-1" width={150} height={10} />
          <Skeleton className="-mt-1" width={150} height={10} />
        </div>
      </div>
    </div>
  </section>
);

export default Loading;
