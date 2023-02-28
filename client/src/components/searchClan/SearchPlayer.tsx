import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";

const SearchPlayer = () => {
  const data = useQueryCache<Clan>("searchClan");

  return <div>{data.name}</div>;
};

export default SearchPlayer;
