import { Container, Flex, Heading, IconButton, Stack } from "@chakra-ui/react";
import useCharacters from "../hooks/useCharacters";
import CharacterGrid from "../components/CharacterGrid";
import { useState } from "react";
import SkeletonGrid from "../components/SkeletonGrid";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Homepage = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useCharacters(page);

  const updatePage = (value: string) => {
    if (value === "previous") page > 1 ? setPage(page - 1) : setPage(page);
    else {
      setPage(page + 1);
    }
  };

  return (
    <>
      <Container maxW="100%" padding="0">
        <Container paddingTop={"100px"} paddingBottom={"100px"} centerContent>
          <Heading
            fontSize={{ base: "40px", sm: "40px", md: "60px", lg: "80px" }}
            color="#1B1A1A"
            fontWeight={800}
          >
            Rick and Morty
          </Heading>
        </Container>
        <Container bg="#1B1A1A" maxW="100%">
          <Flex alignItems="center" justifyContent="center">
            {isLoading && <SkeletonGrid />}
            {data && <CharacterGrid characters={data.results} />}
          </Flex>
          <Flex justifyContent="center">
            <Stack
              direction="row"
              spacing={4}
              align="center"
              paddingBottom="20px"
            >
              <IconButton
                isRound={true}
                variant="solid"
                bg="white"
                color="#555555"
                aria-label="Back"
                fontSize="20px"
                icon={<IoIosArrowBack />}
                onClick={() => updatePage("previous")}
              />
              <IconButton
                isRound={true}
                variant="solid"
                bg="white"
                color="#555555"
                aria-label="Next"
                fontSize="20px"
                icon={<IoIosArrowForward />}
                onClick={() => updatePage("next")}
              />
            </Stack>
          </Flex>
        </Container>
      </Container>
    </>
  );
};

export default Homepage;
