import React from "react";
import PlayerInfo from "@/components/player/playerInfo/PlayerInfo";
import ClanInfo from "@/components/player/clanInfo/ClanInfo";
import VersusLeagueInfo from "@/components/player/versusLeagueInfo/VersusLeagueInfo";
import VersusBottomStat from "@/components/player/versusButtomStat/VersusButtomStat";

const PlayerVersus = () => {
  return (
    <div>
      <PlayerInfo />
      <ClanInfo />
      <VersusLeagueInfo />
      <VersusBottomStat />
    </div>
  );
};

export default PlayerVersus;
