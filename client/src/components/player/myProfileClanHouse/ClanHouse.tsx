import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

import style from "./clanhouse.module.css";
import { Box, Typography } from "@mui/material";

const ClanHouse = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <Box textAlign="center" className="bg-[#3681D8] rounded-md p-2">
      <Typography variant="body1">
        Total Capital Contribution: {player.clanCapitalContributions}
      </Typography>
    </Box>
  );
};

export default ClanHouse;
