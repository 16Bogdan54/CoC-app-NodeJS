import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

import style from "./bottom.module.css";

const BottomInfo = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className={style.bottom_panel}>
      <div>
        <span>Troops donated:</span>
        <span>{player.donations}</span>
      </div>
      <div>
        <span>Troops received:</span>
        <span>{player.received}</span>
      </div>
      <div>
        <span>Attacks Won:</span>
        <span>{player.attackWins}</span>
      </div>
      <div>
        <span>Defenses Won:</span>
        <span>{player.defenseWins}</span>
      </div>
    </div>
  );
};

export default BottomInfo;
