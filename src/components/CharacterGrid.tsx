import { SimpleGrid } from "@chakra-ui/react";
import CharacterCard from "./CharacterCard";
import { Character } from "../models/character";

interface CharacterProps {
  characters: Character[];
}
const CharacterGrid = ({ characters }: CharacterProps) => {
  return (
    <SimpleGrid
      spacing={5}
      maxW="100%"
      columns={{ base: 1, sm: 1, md: 3, lg: 4 }}
      paddingBottom={"20px"}
      paddingTop="50px"
    >
      {characters.map((character: Character) => {
        return <CharacterCard character={character} key={character.id} />;
      })}
    </SimpleGrid>
  );
};

export default CharacterGrid;
