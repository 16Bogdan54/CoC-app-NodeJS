import { getIconURL } from "@/components/utils/utils";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";
import Unit from "@/components/troops/unit/Unit";

import style from "./heroes.module.css";

const HeroesList = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className={style.heroes_container}>
      {player.heroes.map((hero, index) => {
        if (hero.village === "home") {
          return (
            <Unit key={index} picURL={getIconURL(hero.name)} lvl={hero.level} />
          );
        }
      })}
    </div>
  );
};

export default HeroesList;
