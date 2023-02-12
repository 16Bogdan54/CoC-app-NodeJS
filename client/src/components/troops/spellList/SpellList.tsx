import { getIconURL } from "@/components/utils/utils";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

const SpellList = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className="w-full flex items-center justify-center">
      {player.spells.map((spell, index) => (
        <div key={index}>
          <img width={50} src={getIconURL(spell.name)} alt="icon" />
          <h1>{spell.level}</h1>
        </div>
      ))}
    </div>
  );
};

export default SpellList;
