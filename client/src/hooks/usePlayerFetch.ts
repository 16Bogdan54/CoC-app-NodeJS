import { useQuery } from "@tanstack/react-query";
import { Player } from "clashofclans.js";
import { getPlayer } from "@/api/getPlayer";

type playerData = [string, unknown, Player];

export const usePlayerFetch = (): playerData => {
  const {
    status,
    error,
    data: player,
  } = useQuery<Player>({
    queryKey: ["playerData"],
    queryFn: getPlayer,
  });

  return <[string, unknown, Player]>[status, error, player];
};
