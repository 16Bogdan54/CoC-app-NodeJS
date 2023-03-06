import Unit from "@/components/troops/unit/Unit";
import { getIconURL } from "@/components/utils/utils";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Box, Grid, Typography } from "@mui/material";
import { Player } from "clashofclans.js";

const TroopsList = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <Box className="text-white" p={2}>
      <Typography variant="h5">Troops</Typography>
      <Grid container spacing={2} py={1}>
        {player.troops.map((troop, index) => {
          if (
            troop.village === "home" &&
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
    </Box>
  );
};

export default TroopsList;
