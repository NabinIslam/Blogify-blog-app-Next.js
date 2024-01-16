import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const LoadingSkeleton = () => (
  <section className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-10">
    <Skeleton count={1} height={380} />
    <Skeleton count={1} height={380} />
    <Skeleton count={1} height={380} />
    <Skeleton count={1} height={380} />
    <Skeleton count={1} height={380} />
    <Skeleton count={1} height={380} />
    <Skeleton count={1} height={380} />
    <Skeleton count={1} height={380} />
  </section>
);

export default LoadingSkeleton;
