import PlayerInfo from "@/components/player/playerInfo/PlayerInfo";
import ClanInfo from "@/components/player/clanInfo/ClanInfo";
import VersusLeagueInfo from "@/components/player/versusLeagueInfo/VersusLeagueInfo";
import VersusBottomStat from "@/components/player/versusButtomStat/VersusButtomStat";

import style from "./style/style.module.css";

const PlayerVersus = () => {
  return (
    <div className={style.player_container}>
      <div className={style.player_inner}>
        <PlayerInfo />
        <ClanInfo />
        <VersusLeagueInfo />
      </div>
      <VersusBottomStat />
    </div>
  );
};

export default PlayerVersus;
