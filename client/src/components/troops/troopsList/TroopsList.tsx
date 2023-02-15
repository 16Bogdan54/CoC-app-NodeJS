import Unit from "@/components/troops/unit/Unit";
import { getIconURL } from "@/components/utils/utils";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

const TroopsList = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className="flex items-center justify-start flex-wrap gap-2">
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
