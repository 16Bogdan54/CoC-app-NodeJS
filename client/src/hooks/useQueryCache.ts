import { useQueryClient } from "@tanstack/react-query";

export const useQueryCache = <T>(key: string): T => {
  const client = useQueryClient();
  return <T>client.getQueryData([key]);
};
