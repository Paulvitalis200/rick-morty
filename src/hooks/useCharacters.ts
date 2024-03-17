import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Character } from "../models/character";

const apiClient = new APIClient<Character>("/character");

const useCharacters = (page: number) => {
  const fetchCharacters = () =>
    apiClient.getAll({
      params: {
        page: page,
      },
    });
  return useQuery({
    queryKey: ["characters", page],
    queryFn: fetchCharacters,
    staleTime: 24 * 60 * 60 * 100, //24h
  });
};

export default useCharacters;
