import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import CharacterCard from "../components/CharacterCard";
import useCharacters from "../hooks/useCharacters";

const Homepage = () => {
  const { data } = useCharacters();

  console.log("GAMES: ", data);
  return (
    <>
      <Container maxW="100%" padding="0">
        <Container paddingTop={"100px"} paddingBottom={"100px"} centerContent>
          <Heading fontSize={"80px"} color="#1B1A1A" fontWeight={800}>
            Rick and Morty
          </Heading>
        </Container>
        <SimpleGrid
          spacing={2}
          maxW="100%"
          bg="#1B1A1A"
          columns={{ base: 1, sm: 1, md: 4, lg: 4 }}
          width={"100%"}
          paddingBottom={"20px"}
          paddingTop="50px"
        >
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
          <CharacterCard />
        </SimpleGrid>
      </Container>
      /
    </>
  );
};

export default Homepage;
