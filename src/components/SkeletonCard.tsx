import { Skeleton } from "@chakra-ui/react";

const SkeletonCard = () => {
  return (
    <Skeleton
      width="200px"
      maxW="200px"
      height="300px"
      marginBottom="20px"
      borderRadius="3px"
    />
  );
};

export default SkeletonCard;
