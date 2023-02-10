import { useQueryClient } from "@tanstack/react-query";
import { Player } from "clashofclans.js";

export const useQueryCache = (key: string): Player => {
  const client = useQueryClient();
  return <Player>client.getQueryData([key]);
};
