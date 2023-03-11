import { Grid } from "@mui/material";
import PlayerInfo from "@/components/searchPlayer/Player/playerInfo/PlayerInfo";
import ClanInfo from "@/components/searchPlayer/Player/clanInfo/ClanInfo";
import LeagueInfo from "@/components/searchPlayer/Player/leagueInfo/LeagueInfo";
import BottomInfo from "@/components/searchPlayer/Player/bottomInfo/BottomInfo";

const TopPanel = () => {
  return (
    <Grid container spacing={2} className="text-white">
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

export default TopPanel;
