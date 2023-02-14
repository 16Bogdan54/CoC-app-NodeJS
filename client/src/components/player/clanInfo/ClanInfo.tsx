import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

import style from "./clanInfo.module.css";

const ClanInfo = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className={style.clanInfo_container}>
      <h2 className="text-2xl">{player.clan?.name}</h2>
      <img width={100} src={player.clan?.badge.url} alt="clan logo" />
    </div>
  );
};

export default ClanInfo;
