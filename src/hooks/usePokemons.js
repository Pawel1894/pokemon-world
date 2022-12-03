import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function usePokemons(endpoint) {
  return useQuery({
    queryKey: ["pokemons", endpoint],
    queryFn: async () => {
      const pokemonList = [];

      const { data } = await axios.get(endpoint);

      for (const pokemon of data.results) {
        pokemonList.push(fetchPokemonDetails(pokemon.url));
      }

      return {
        count: data.count,
        next: data.next,
        previous: data.previous,
        results: await Promise.all(pokemonList),
      };
    },
    keepPreviousData: true,
  });
}

async function fetchPokemonDetails(url) {
  const { data } = await axios.get(url);
  return data;
}
