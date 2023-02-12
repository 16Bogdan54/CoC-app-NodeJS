import React from "react";
import PlayerInfo from "@/components/player/playerInfo/PlayerInfo";
import ClanInfo from "@/components/player/clanInfo/ClanInfo";
import ClanHouse from "@/components/player/myProfileClanHouse/ClanHouse";

const PlayerClanCapital = () => {
  return (
    <div>
      <PlayerInfo />
      <ClanInfo />
      <ClanHouse />
    </div>
  );
};

export default PlayerClanCapital;
