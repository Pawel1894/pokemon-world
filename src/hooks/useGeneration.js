import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchGenerationDetails(url) {
  const { data } = await axios.get(url);
  return data;
}

export function useGenerations() {
  return useQuery({
    queryKey: ["generation"],
    queryFn: async () => {
      const { data } = await axios.get("https://pokeapi.co/api/v2/generation/");
      const result = [];

      for (const gen of data.results) {
        result.push(fetchGenerationDetails(gen.url));
      }

      return await Promise.all(result);
    },
  });
}
