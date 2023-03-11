import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

import style from "src/components/searchPlayer/Player/bottomInfo/bottom.module.css";
import { Grid, Typography } from "@mui/material";

const BottomInfo = () => {
  const player = useQueryCache<Player>("playerSearch");

  return (
    <Grid container className={style.bottom_panel} p={2}>
      <Grid item xs={6} sm={3}>
        <Typography variant="body2">
          Troops donated: {player.donations}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="body2">
          Troops received: {player.received}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="body2">
          Attacks Won: {player.attackWins}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={3}>
        <Typography variant="body2">
          Defenses Won: {player.defenseWins}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default BottomInfo;
