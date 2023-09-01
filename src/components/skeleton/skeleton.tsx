import { SkeletonRight, SkeletonLeft, SkeletonWrapper, SkeletonSquare, SkeletonLineBig, SkeletonLine, SkeletonLineSmall } from "./styled";

export const Skeleton = () => {
  return <SkeletonWrapper>
    <SkeletonLeft>
        <SkeletonSquare />
    </SkeletonLeft>
    <SkeletonRight>
        <SkeletonLineBig />
        <SkeletonLine />
        <SkeletonLine />
        <SkeletonLineSmall />
    </SkeletonRight>
  </SkeletonWrapper>
};
