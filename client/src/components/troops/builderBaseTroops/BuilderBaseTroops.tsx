import { getIconURL } from "@/components/utils/utils";
import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";
import Unit from "@/components/troops/unit/Unit";
import BuilderBaseHeroes from "@/components/troops/builderBaseHeroes/BuilderBaseHeroes";
import { Box, Grid, Stack, Typography } from "@mui/material";

import style from "@/components/troops/styles/units.module.css";

const BuilderBaseTroops = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <Box className="text-white" p={2}>
      <Typography variant="h5">Troops</Typography>
      <Grid container spacing={1} py={1}>
        {player.troops.map((troop, index) => {
          if (
            troop.village === "builderBase" &&
            !troop.originalName &&
            troop.unlockBuilding !== "Workshop"
          ) {
            return (
              <Grid item xs="auto">
                <Unit
                  key={index}
                  picURL={getIconURL(troop.name)}
                  lvl={troop.level}
                />
              </Grid>
            );
          }
        })}
      </Grid>
      <BuilderBaseHeroes />
    </Box>
  );
};

export default BuilderBaseTroops;
