import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

import style from "./league.module.css";

const LeagueInfo = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className="text-white">
      <div className={style.league_block}>
        <img width={100} src={player.league.icon.url} alt="league icon" />
        <div>
          <h1>{player.league.name}</h1>
          <h1>{player.trophies}</h1>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className={style.war_stars_block}>
          <h1>War Stars Won:</h1>
          <div className="bg-[#3a385d] rounded-md text-end px-2">
            <h1>{player.warStars}</h1>
          </div>
        </div>
        <div className={style.trophies_block}>
          <h1>All time best:</h1>
          <div className="flex justify-center items-center bg-[#3a385d] rounded-md px-1">
            <span className="mr-2">🏆</span>
            <span>{player.bestTrophies}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeagueInfo;
