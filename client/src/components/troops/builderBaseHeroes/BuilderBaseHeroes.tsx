import { useQueryCache } from "@/hooks/useQueryCache";
import { getIconURL } from "@/components/utils/utils";
import { Player } from "clashofclans.js";

const BuilderBaseHeroes = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div>
      <div className="w-full flex items-center justify-center">
        {player.heroes.map((hero, index) => {
          if (hero.village === "builderBase") {
            return (
              <div key={index}>
                <img width={50} src={getIconURL(hero.name)} alt="icon" />
                <h1>{hero.level}</h1>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default BuilderBaseHeroes;
