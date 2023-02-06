import React from "react";
import PlayerInfo from "./playerInfo/PlayerInfo";
import ClanInfo from "./clanInfo/ClanInfo";
import LeagueInfo from "./leagueInfo/LeagueInfo";
import BottomInfo from "./bottomInfo/BottomInfo";

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
