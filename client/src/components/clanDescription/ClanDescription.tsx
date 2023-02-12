import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";

const ClanDescription = () => {
  const clan = useQueryCache<Clan>("clanData");

  return <div>{/*<img src={clan. alt=""/>*/}</div>;
};

export default ClanDescription;
