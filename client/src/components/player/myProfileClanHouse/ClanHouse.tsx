import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";

const ClanHouse = () => {
  const player = useQueryCache("playerData");

  return (
    <div>
      <h1>Clan House</h1>
      <h1>total Capital Contribution</h1>
      <span>{player.clanCapitalContributions}</span>
    </div>
  );
};

export default ClanHouse;
