import { getIconURL } from "@/components/utils/utils";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

const HeroesList = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className="w-full flex items-center justify-center">
      {player.heroes.map((hero, index) => {
        if (hero.village === "home") {
          return (
            <div key={index}>
              <img width={50} src={getIconURL(hero.name)} alt="icon" />
              <h1>{hero.level}</h1>
            </div>
          );
        }
      })}
    </div>
  );
};

export default HeroesList;
