import { useQuery } from "@tanstack/react-query";
import { Player } from "clashofclans.js";
import { getData } from "@/hooks/utils";

type playerData = [string, unknown, Player];

export const usePlayerFetch = (url: string, queryKey: string): playerData => {
  const {
    status,
    error,
    data: player,
  } = useQuery<Player>({
    queryKey: [queryKey],
    queryFn: () => getData(url),
  });

  return <[string, unknown, Player]>[status, error, player];
};
