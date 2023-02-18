import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

import style from "./clanhouse.module.css";

const ClanHouse = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className={style.capital_container}>
      <h1>total Capital Contribution</h1>
      <span>{player.clanCapitalContributions}</span>
    </div>
  );
};

export default ClanHouse;
