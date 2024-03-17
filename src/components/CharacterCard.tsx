import { Card, Image, Text } from "@chakra-ui/react";
import { Character } from "../models/character";

interface CharacterProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterProps) => {
  return (
    <Card
      maxW="200px"
      width="200px"
      height="300px"
      marginBottom="20px"
      borderRadius="3px"
    >
      <Image
        objectFit="cover"
        src={character.image}
        alt="Character"
        borderTopRadius="3px"
        height="80%"
      />
      <Text fontWeight={600} marginLeft="25px" color="#555555">
        {character.name}
      </Text>
      <Text fontWeight={300} fontSize="13px" marginLeft="25px" color="#555555">
        {character.location.name}
      </Text>
    </Card>
  );
};

export default CharacterCard;
