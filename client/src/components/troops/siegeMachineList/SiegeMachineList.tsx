import { useQueryCache } from "@/hooks/useQueryCache";
import { getIconURL } from "@/components/utils/utils";
import { Player } from "clashofclans.js";

const SiegeMachineList = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className="w-full flex items-center justify-center">
      {player.troops.map((troop, index) => {
        if (troop.unlockBuilding === "Workshop") {
          return (
            <div key={index}>
              <img width={50} src={getIconURL(troop.name)} alt="icon" />
              <h1>{troop.level}</h1>
            </div>
          );
        }
      })}
    </div>
  );
};

export default SiegeMachineList;
