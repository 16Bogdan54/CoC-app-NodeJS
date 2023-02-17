import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

const VersusBottomStat = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div>
      <h1>Versus Battle Wins:</h1>
      <span>{player.versusBattleWins}</span>
    </div>
  );
};

export default VersusBottomStat;
