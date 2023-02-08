import React from "react";
import PlayerInfo from "@/components/player/playerInfo/PlayerInfo";
import ClanInfo from "@/components/player/clanInfo/ClanInfo";
import LeagueInfo from "@/components/player/leagueInfo/LeagueInfo";
import BottomInfo from "@/components/player/bottomInfo/BottomInfo";

const Player = () => {
  return (
    <div>
      <PlayerInfo />
      <ClanInfo />
      <LeagueInfo />
      <BottomInfo />
    </div>
  );
};

export default Player;
