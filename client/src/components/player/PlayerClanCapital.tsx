import React from "react";
import PlayerInfo from "@/components/player/playerInfo/PlayerInfo";
import ClanInfo from "@/components/player/clanInfo/ClanInfo";
import ClanHouse from "@/components/player/myProfileClanHouse/ClanHouse";
import { Grid } from "@mui/material";

const PlayerClanCapital = () => {
  return (
    <Grid container spacing={2} className="text-white">
      <Grid item xs={6}>
        <PlayerInfo />
      </Grid>
      <Grid item xs={6}>
        <ClanInfo />
      </Grid>
      <Grid item xs={12}>
        <ClanHouse />
      </Grid>
    </Grid>
  );
};

export default PlayerClanCapital;
