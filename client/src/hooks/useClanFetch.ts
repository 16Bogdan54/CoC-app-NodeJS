import { Clan } from "clashofclans.js";
import { useQuery } from "@tanstack/react-query";
import { getData } from "@/hooks/utils";

type clanData = [string, unknown, Clan];

export const useClanFetch = (url: string): clanData => {
  const {
    status,
    error,
    data: clan,
  } = useQuery<Clan>({
    queryKey: ["clanData"],
    queryFn: () => getData(url),
  });

  return <[string, unknown, Clan]>[status, error, clan];
};
