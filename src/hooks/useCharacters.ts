import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Character } from "../models/character";

const apiClient = new APIClient<Character>("/character");

const useCharacters = (page: number) => {
  const fetchCharacters = ({ pageParam = page }) =>
    apiClient.getAll({
      params: {
        page: pageParam,
      },
    });
  return useQuery<FetchResponse<Character>, Error>({
    queryKey: ["characters", page],
    queryFn: fetchCharacters,
    staleTime: 24 * 60 * 60 * 100, //24h
    keepPreviousData: true,
  });
};

export default useCharacters;
