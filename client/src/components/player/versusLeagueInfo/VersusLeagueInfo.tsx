import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

import style from "./league.module.css";

const VersusLeagueInfo = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className={style.league_container}>
      <div>
        <span>🏆{player.versusTrophies}</span>
      </div>
      <div>
        <h2>All time best:</h2>
        <span>🏆{player.bestVersusTrophies}</span>
      </div>
    </div>
  );
};

export default VersusLeagueInfo;
