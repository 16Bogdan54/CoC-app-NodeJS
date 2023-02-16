import { useQueryCache } from "@/hooks/useQueryCache";
import { getIconURL } from "@/components/utils/utils";
import { Player } from "clashofclans.js";
import Unit from "@/components/troops/unit/Unit";

import style from "./siege.module.css";

const SiegeMachineList = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className={style.siege_container}>
      {player.troops.map((troop, index) => {
        if (troop.unlockBuilding === "Workshop") {
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

export default SiegeMachineList;
