import React from "react";
import PlayerClanCapital from "@/components/player/PlayerClanCapital";
import Achievements from "@/components/achievements/Achievements";

const ClanCapital = () => {
  return (
    <div>
      <PlayerClanCapital />
      <hr />
      <Achievements />
    </div>
  );
};

export default ClanCapital;
