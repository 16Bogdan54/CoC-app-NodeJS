import PlayerInfo from "@/components/player/playerInfo/PlayerInfo";
import ClanInfo from "@/components/player/clanInfo/ClanInfo";
import VersusBottomStat from "@/components/player/versusBottomStat/VersusBottomStat";
import { Grid } from "@mui/material";

const PlayerVersus = () => {
  return (
    <Grid container spacing={2} className="text-white">
      <Grid item xs={6}>
        <PlayerInfo />
      </Grid>
      <Grid item xs={6}>
        <ClanInfo />
      </Grid>
      <Grid item xs={12}>
        <VersusBottomStat />
      </Grid>
    </Grid>
  );
};

export default PlayerVersus;
