import { Clan } from "clashofclans.js";
import { useQuery } from "@tanstack/react-query";
import { getClan } from "@/api/getClan";

type clanData = [string, unknown, Clan];

export const useClanFetch = (): clanData => {
  const {
    status,
    error,
    data: clan,
  } = useQuery<Clan>({
    queryKey: ["clanData"],
    queryFn: getClan,
  });

  return <[string, unknown, Clan]>[status, error, clan];
};
