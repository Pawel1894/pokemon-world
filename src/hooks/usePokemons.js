import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function usePokemons(endpoint) {
  return useQuery({
    queryKey: ["pokemons", endpoint],
    queryFn: async () => {
      let pokemonList = [];

      const { data } = await axios.get(endpoint);

      for (const pokemon of data.results) {
        const response = await fetchPokemonDetails(pokemon.url);
        pokemonList.push(response);
      }

      return {
        count: data.count,
        next: data.next,
        previous: data.previous,
        results: pokemonList,
      };
    },
    keepPreviousData: true,
  });
}

async function fetchPokemonDetails(url) {
  const { data } = await axios.get(url);
  return data;
}
