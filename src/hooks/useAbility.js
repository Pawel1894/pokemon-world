import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useAbility(endpoint) {
  return useQuery({
    queryKey: ["ability", endpoint],
    queryFn: async () => {
      const { data } = await axios.get(endpoint);
      return data;
    },
    enabled: !!endpoint,
  });
}
