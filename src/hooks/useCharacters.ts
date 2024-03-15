// import { FetchResponse } from "../services/api-client";
// import { useInfiniteQuery } from "@tanstack/react-query";
// import APIClient from "../services/api-client";
// import ms from "ms";
// import useGameQueryStore from "../store";
// import Game from "../entities/Game";

import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/character");

const useCharacters = () => {
  //   const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const fetchCharacters = ({ pageParam = 1 }) =>
    apiClient.getAll({
      params: {
        page: pageParam,
      },
    });
  return useInfiniteQuery<any>({
    queryKey: ["characters"],
    queryFn: fetchCharacters,
    staleTime: 24 * 60 * 60 * 100, //24h
    getNextPageParam: (lastPage, allPages) => {
      //1 -> 2
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useCharacters;
