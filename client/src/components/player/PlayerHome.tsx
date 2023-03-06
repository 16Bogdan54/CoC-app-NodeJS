import PlayerInfo from "@/components/player/playerInfo/PlayerInfo";
import ClanInfo from "@/components/player/clanInfo/ClanInfo";
import LeagueInfo from "@/components/player/leagueInfo/LeagueInfo";
import BottomInfo from "@/components/player/bottomInfo/BottomInfo";

import style from "./style/style.module.css";
import { Grid } from "@mui/material";

const PlayerHome = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={4}>
        <PlayerInfo />
      </Grid>
      <Grid item xs={6} md={4}>
        <ClanInfo />
      </Grid>
      <Grid item xs={12} md={4}>
        <LeagueInfo />
      </Grid>
      <Grid item xs={12}>
        <BottomInfo />
      </Grid>
    </Grid>
  );
};

export default PlayerHome;
