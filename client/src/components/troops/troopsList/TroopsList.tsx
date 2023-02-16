import Unit from "@/components/troops/unit/Unit";
import { getIconURL } from "@/components/utils/utils";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

import style from "@/components/troops/styles/units.module.css";

const TroopsList = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className={style.units_outer}>
      <h2 className={style.units_heading}>Troops</h2>
      <div className={style.img_container}>
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
    </div>
  );
};

export default TroopsList;
