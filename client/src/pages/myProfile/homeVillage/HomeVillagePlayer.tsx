import React from "react";
import PlayerHome from "@/components/player/PlayerHome";
import Units from "@/components/troops/Units";
import Achievements from "@/components/achievements/Achievements";

const HomeVillagePlayer = () => {
  return (
    <div>
      <PlayerHome />
      <hr />
      <Units />
      <hr />
      <Achievements />
    </div>
  );
};

export default HomeVillagePlayer;
