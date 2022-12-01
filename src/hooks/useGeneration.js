import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useGenerations() {
  return useQuery({
    queryKey: ["generation"],
    queryFn: async () => {
      const { data } = await axios.get("https://pokeapi.co/api/v2/generation/");
      let result = [];

      for (const gen of data.results) {
        const response = await fetchGenerationDetails(gen.url);
        result.push(response);
      }

      return result;
    },
  });
}

async function fetchGenerationDetails(url) {
  const { data } = await axios.get(url);
  return data;
}
