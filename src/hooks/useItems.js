import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchItemDetails(url) {
  const { data } = await axios.get(url);
  return data;
}

export function useItems(endpoint) {
  return useQuery({
    queryKey: ["items", endpoint],
    queryFn: async () => {
      const itemsList = [];

      const { data } = await axios.get(endpoint);

      for (const item of data.results) {
        itemsList.push(fetchItemDetails(item.url));
      }

      return {
        count: data.count,
        next: data.next,
        previous: data.previous,
        results: await Promise.all(itemsList),
      };
    },
    keepPreviousData: true,
  });
}
