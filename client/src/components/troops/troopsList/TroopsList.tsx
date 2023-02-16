import Unit from "@/components/troops/unit/Unit";
import { getIconURL } from "@/components/utils/utils";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

import style from "./troops.module.css";

const TroopsList = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className={style.troops_container}>
      {player.troops.map((troop, index) => {
        if (
          troop.village === "home" &&
          !troop.originalName &&
          troop.unlockBuilding !== "Workshop"
        ) {
          return (
            <Unit
              key={index}
              picURL={getIconURL(troop.name)}
              lvl={troop.level}
            />
          );
        }
      })}
    </div>
  );
};

export default TroopsList;
