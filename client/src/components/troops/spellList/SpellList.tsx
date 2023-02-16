import { getIconURL } from "@/components/utils/utils";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";
import Unit from "@/components/troops/unit/Unit";

import style from "@/components/troops/styles/units.module.css";

const SpellList = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className={style.units_outer}>
      <h2 className={style.units_heading}>Spells</h2>
      <div className={style.img_container}>
        {player.spells.map((spell, index) => (
          <Unit key={index} picURL={getIconURL(spell.name)} lvl={spell.level} />
        ))}
      </div>
    </div>
  );
};

export default SpellList;
