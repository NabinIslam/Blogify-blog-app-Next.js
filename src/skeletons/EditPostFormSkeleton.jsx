import React from "react";
import Skeleton from "react-loading-skeleton";

const EditPostFormSkeleton = () => {
  return (
    <div>
      <Skeleton />
      <Skeleton height={43} />
      <Skeleton />
      <Skeleton height={350} />
      <Skeleton />
      <Skeleton height={43} />
      <Skeleton />
      <Skeleton height={43} />
      <Skeleton />
      <Skeleton height={43} width={60} />
    </div>
  );
};

export default EditPostFormSkeleton;
