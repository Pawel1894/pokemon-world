import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useItems(endpoint) {
  return useQuery({
    queryKey: ["items", endpoint],
    queryFn: async () => {
      let itemsList = [];

      const { data } = await axios.get(endpoint);

      for (const item of data.results) {
        const response = await fetchItemDetails(item.url);
        itemsList.push(response);
      }

      return {
        count: data.count,
        next: data.next,
        previous: data.previous,
        results: itemsList,
      };
    },
    keepPreviousData: true,
  });
}

async function fetchItemDetails(url) {
  const { data } = await axios.get(url);
  return data;
}
