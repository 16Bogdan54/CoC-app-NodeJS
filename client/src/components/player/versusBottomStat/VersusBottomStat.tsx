import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";
import { Grid, Typography } from "@mui/material";
import style from "./bottom.module.css";

const VersusBottomStat = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <Grid container className={style.bottom_panel} p={2}>
      <Grid item xs={6} sm={4}>
        <Typography variant="body1">Versus {player.versusTrophies}</Typography>
      </Grid>
      <Grid item xs={6} sm={4}>
        <Typography variant="body1">
          All time best: {player.bestVersusTrophies}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="body1">
          Versus Battle Wins: {player.versusBattleWins}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default VersusBottomStat;
