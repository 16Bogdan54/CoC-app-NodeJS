import { getIconURL } from "@/components/utils/utils";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";
import Unit from "@/components/troops/unit/Unit";

const SpellList = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className="flex items-center justify-start flex-wrap gap-2 my-2">
      {player.spells.map((spell, index) => (
        <Unit key={index} picURL={getIconURL(spell.name)} lvl={spell.level} />
      ))}
    </div>
  );
};

export default SpellList;
