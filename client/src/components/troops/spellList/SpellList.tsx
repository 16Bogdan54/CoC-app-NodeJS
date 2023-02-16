import { getIconURL } from "@/components/utils/utils";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";
import Unit from "@/components/troops/unit/Unit";

import style from "./spells.module.css";

const SpellList = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className={style.spell_container}>
      {player.spells.map((spell, index) => (
        <Unit key={index} picURL={getIconURL(spell.name)} lvl={spell.level} />
      ))}
    </div>
  );
};

export default SpellList;
