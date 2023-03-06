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
        <Typography variant="body2">Versus {player.versusTrophies}</Typography>
      </Grid>
      <Grid item xs={6} sm={4}>
        <Typography variant="body2">
          All time best: {player.bestVersusTrophies}
        </Typography>
      </Grid>
      <Grid item xs={6} sm={4}>
        <Typography variant="body2">
          Versus Battle Wins: {player.versusBattleWins}
        </Typography>
      </Grid>
    </Grid>
    //   {/*<div className={style.bottom_panel}>*/}
    //       // <div>
    //       //     <span>🏆{player.versusTrophies}</span>
    //       // </div>
    //       // <div>
    //       //     <h2>All time best:</h2>
    //       //     <span>🏆{player.bestVersusTrophies}</span>
    //       // </div>
    //     // <span className="mr-2">Versus Battle Wins:</span>
    //     // <span>{player.versusBattleWins}</span>
    //   {/*</div>*/}
  );
};

export default VersusBottomStat;
