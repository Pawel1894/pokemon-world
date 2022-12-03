import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

async function fetchPokemonDetails(url) {
  const { data } = await axios.get(url);
  return data;
}

async function fetchByName(searchValue) {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchValue}`);

  return data;
}

async function fetchByOffset(searchValue) {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1&offset=${searchValue}`);

  return fetchPokemonDetails(data.results[0].url);
}

export function usePokemon(searchValue) {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ["pokemons", searchValue],
    queryFn: async () => {
      if (typeof searchValue === "number") return fetchByOffset(searchValue);

      return fetchByName(searchValue);
    },
    initialData: () => {
      if (typeof searchValue === "string") {
        return queryClient.getQueryData(["pokemons"])?.results?.find((p) => p.name === searchValue);
      }
    },
    enabled: Boolean(searchValue),
  });
}
