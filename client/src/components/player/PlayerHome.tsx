import PlayerInfo from "@/components/player/playerInfo/PlayerInfo";
import ClanInfo from "@/components/player/clanInfo/ClanInfo";
import LeagueInfo from "@/components/player/leagueInfo/LeagueInfo";
import BottomInfo from "@/components/player/bottomInfo/BottomInfo";

import style from "./style/style.module.css";

const PlayerHome = () => {
  return (
    <div className={style.player_container}>
      <div className={style.player_inner}>
        <PlayerInfo />
        <ClanInfo />
        <LeagueInfo />
      </div>
      <BottomInfo />
    </div>
  );
};

export default PlayerHome;
