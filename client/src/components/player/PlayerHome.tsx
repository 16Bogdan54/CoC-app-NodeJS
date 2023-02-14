import React from "react";
import PlayerInfo from "@/components/player/playerInfo/PlayerInfo";
import ClanInfo from "@/components/player/clanInfo/ClanInfo";
import LeagueInfo from "@/components/player/leagueInfo/LeagueInfo";
import BottomInfo from "@/components/player/bottomInfo/BottomInfo";

import style from "./style/style.module.css";

const PlayerHome = () => {
  return (
    <div className={style.player_home_container}>
      <div className={style.player_home_inner}>
        <PlayerInfo />
        <ClanInfo />
        <LeagueInfo />
        <BottomInfo />
      </div>
    </div>
  );
};

export default PlayerHome;
