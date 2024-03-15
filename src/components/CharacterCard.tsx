import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Text,
} from "@chakra-ui/react";

const CharacterCard = () => {
  return (
    <Card maxW="md">
      {/* <CardBody></CardBody> */}
      <Image
        objectFit="cover"
        src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Chakra UI"
      />
      <Text fontWeight={600}>Rick Sanchez</Text>
      <Text fontWeight={300} fontSize="13px">
        Citadel of Ricks
      </Text>
    </Card>
  );
};

export default CharacterCard;
