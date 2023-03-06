import { useQueryCache } from "@/hooks/useQueryCache";
import { getIconURL } from "@/components/utils/utils";
import { Player } from "clashofclans.js";
import { Box, Stack, Typography } from "@mui/material";
import Unit from "@/components/troops/unit/Unit";

const SiegeMachineList = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <Box className="text-white" p={2}>
      <Typography variant="h5">Siege Machines</Typography>
      <Stack direction="row" spacing={2} py={1}>
        {player.troops.map((troop, index) => {
          if (troop.unlockBuilding === "Workshop") {
            return (
              <Unit
                key={index}
                picURL={getIconURL(troop.name)}
                lvl={troop.level}
              />
            );
          }
        })}
      </Stack>
    </Box>
  );
};

export default SiegeMachineList;
