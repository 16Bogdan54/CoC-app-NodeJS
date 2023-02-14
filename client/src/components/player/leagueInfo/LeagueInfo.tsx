import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

import style from "./league.module.css";

const LeagueInfo = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div>
      <div className={style.league_block}>
        <img width={100} src={player.league.icon.url} alt="league icon" />
        <div>
          <h1>{player.league.name}</h1>
          <h1>{player.trophies}</h1>
        </div>
      </div>
      <div className="flex">
        <div className={style.war_stars_block}>
          <h1>War Stars Won:</h1>
          <h1>{player.warStars}</h1>
        </div>
        <div className={style.trophies_block}>
          <h1>All time best:</h1>
          <div className="flex">
            <h1>{player.bestTrophies}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueInfo;
