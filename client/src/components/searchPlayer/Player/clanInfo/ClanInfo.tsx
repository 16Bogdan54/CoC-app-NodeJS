import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

import { Stack, Typography } from "@mui/material";

const ClanInfo = () => {
  const player = useQueryCache<Player>("playerSearch");

  return (
    <Stack justifyContent="center" alignItems="center">
      <Typography variant="h5">{player.clan?.name}</Typography>
      <img width={100} src={player.clan?.badge.url} alt="clan logo" />
    </Stack>
  );
};

export default ClanInfo;
