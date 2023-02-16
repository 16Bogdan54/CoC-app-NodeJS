import { getIconURL } from "@/components/utils/utils";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";
import Unit from "@/components/troops/unit/Unit";

import style from "@/components/troops/styles/units.module.css";

const HeroesList = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className={style.units_outer}>
      <h2 className={style.units_heading}>Heroes</h2>
      <div className={style.img_container}>
        {player.heroes.map((hero, index) => {
          if (hero.village === "home") {
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
    </div>
  );
};

export default HeroesList;
