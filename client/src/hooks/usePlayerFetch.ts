import { useQuery } from "@tanstack/react-query";
import { Player } from "clashofclans.js";
import { getData } from "./utils";

type playerData = [string, unknown, Player];

export const usePlayerFetch = (): playerData => {
  const {
    status,
    error,
    data: player,
  } = useQuery<Player>({
    queryKey: ["playerData"],
    queryFn: getData,
  });

  return <[string, unknown, Player]>[status, error, player];
};
