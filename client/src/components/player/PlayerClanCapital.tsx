import React from "react";
import PlayerInfo from "@/components/player/playerInfo/PlayerInfo";
import ClanInfo from "@/components/player/clanInfo/ClanInfo";
import ClanHouse from "@/components/player/myProfileClanHouse/ClanHouse";

import style from "./style/style.module.css";

const PlayerClanCapital = () => {
  return (
    <div className={style.player_container}>
      <div className={style.player_inner}>
        <PlayerInfo />
        <ClanInfo />
        <ClanHouse />
      </div>
    </div>
  );
};

export default PlayerClanCapital;
