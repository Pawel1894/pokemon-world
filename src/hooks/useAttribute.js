import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useAttribute(endpoint) {
  return useQuery({
    queryKey: ["attribute", endpoint],
    queryFn: async () => {
      const { data } = await axios.get(endpoint);
      return data;
    },
  });
}
