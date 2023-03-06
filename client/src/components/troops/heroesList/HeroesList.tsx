import { getIconURL } from "@/components/utils/utils";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";
import Unit from "@/components/troops/unit/Unit";
import { Box, Stack, Typography } from "@mui/material";

const HeroesList = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <Box className="text-white" p={2}>
      <Typography variant="h5">Heroes</Typography>
      <Stack direction="row" spacing={2} py={1}>
        {player.heroes.map((hero, index) => {
          if (hero.village === "home") {
            return (
              <Unit
                key={index}
                picURL={getIconURL(hero.name)}
                lvl={hero.level}
              />
            );
          }
        })}
      </Stack>
    </Box>
  );
};

export default HeroesList;
