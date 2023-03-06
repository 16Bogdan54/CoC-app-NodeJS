import { getIconURL } from "@/components/utils/utils";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";
import { Box, Grid, Typography } from "@mui/material";
import Unit from "@/components/troops/unit/Unit";

const SpellList = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <Box className="text-white" p={2}>
      <Typography variant="h5">Spells</Typography>
      <Grid container spacing={1} py={1}>
        {player.spells.map((spell, index) => (
          <Grid item xs="auto">
            <Unit
              key={index}
              picURL={getIconURL(spell.name)}
              lvl={spell.level}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SpellList;
