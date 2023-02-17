import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

import style from "./bottom.module.css";

const VersusBottomStat = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className={style.bottom_panel}>
      <span className="mr-2">Versus Battle Wins:</span>
      <span>{player.versusBattleWins}</span>
    </div>
  );
};

export default VersusBottomStat;
