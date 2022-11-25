import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function usePokemon(searchValue) {
  return useQuery({
    queryKey: ["pokemons", searchValue],
    queryFn: async () => {
      if (typeof searchValue === "number") return fetchByOffset(searchValue);

      return fetchByName(searchValue);
    },
    enabled: !!searchValue,
  });
}

async function fetchByName(searchValue) {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${searchValue}`
  );

  return data;
}

async function fetchByOffset(searchValue) {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${searchValue}`
  );

  return await fetchPokemonDetails(data.results[0].url);
}

async function fetchPokemonDetails(url) {
  const { data } = await axios.get(url);
  return data;
}
