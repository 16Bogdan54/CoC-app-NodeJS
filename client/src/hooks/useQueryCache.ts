import { useQueryClient } from "@tanstack/react-query";
// import { Player } from "clashofclans.js";

export const useQueryCache = <T>(key: string): T => {
  const client = useQueryClient();
  return <T>client.getQueryData([key]);
};
