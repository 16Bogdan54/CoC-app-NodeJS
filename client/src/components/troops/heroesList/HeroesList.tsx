import { getIconURL } from "@/components/utils/utils";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";
import Unit from "@/components/troops/unit/Unit";

const HeroesList = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className="flex items-center justify-start flex-wrap gap-2 my-2">
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
