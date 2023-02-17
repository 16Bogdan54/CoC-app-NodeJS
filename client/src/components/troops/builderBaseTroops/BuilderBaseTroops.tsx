import { getIconURL } from "@/components/utils/utils";
import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";
import Unit from "@/components/troops/unit/Unit";
import BuilderBaseHeroes from "@/components/troops/builderBaseHeroes/BuilderBaseHeroes";

import style from "@/components/troops/styles/units.module.css";

const BuilderBaseTroops = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className={style.units_outer}>
      <h2 className={style.units_heading}>Troops</h2>
      <div className={style.img_container}>
        {player.troops.map((troop, index) => {
          if (
            troop.village === "builderBase" &&
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
      <BuilderBaseHeroes />
    </div>
  );
};

export default BuilderBaseTroops;
