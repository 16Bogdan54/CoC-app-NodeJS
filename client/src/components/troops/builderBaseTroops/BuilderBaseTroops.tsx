import { getIconURL } from "@/components/utils/utils";
import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

const BuilderBaseTroops = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div>
      <div className="w-full flex items-center justify-center">
        {player.troops.map((troop, index) => {
          if (
            troop.village === "builderBase" &&
            !troop.originalName &&
            troop.unlockBuilding !== "Workshop"
          ) {
            return (
              <div key={index}>
                <img width={50} src={getIconURL(troop.name)} alt="icon" />
                <h1>{troop.level}</h1>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default BuilderBaseTroops;
