import { useQueryCache } from "@/hooks/useQueryCache";
import { getIconURL } from "@/components/utils/utils";
import { Player } from "clashofclans.js";
import Unit from "@/components/troops/unit/Unit";

import style from "@/components/troops/styles/units.module.css";
import React from "react";

const BuilderBaseHeroes = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <>
      <h2 className={style.units_heading}>Heroes</h2>
      <div className={style.img_container}>
        {player.heroes.map((hero, index) => {
          if (hero.village === "builderBase") {
            return (
              <Unit
                key={index}
                picURL={getIconURL(hero.name)}
                lvl={hero.level}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default BuilderBaseHeroes;
