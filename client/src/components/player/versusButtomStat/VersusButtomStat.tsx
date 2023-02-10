import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";

const VersusBottomStat = () => {
  const player = useQueryCache("playerData");
  return (
    <div>
      <h1>Versus Battle Wins:</h1>
      <span>{player.versusBattleWins}</span>
    </div>
  );
};

export default VersusBottomStat;
