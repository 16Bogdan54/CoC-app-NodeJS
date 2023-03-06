import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";
import style from "./player_info.module.css";
import { Box, Stack, Typography } from "@mui/material";

const PlayerInfo = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <Stack justifyContent="center" alignItems="center">
      <Box className="flex items-center">
        <div className={style.exp_lvl}>{player.expLevel}</div>
        <Box>
          <Typography variant="h5">{player.name}</Typography>
          <Typography variant="body1">{player.tag}</Typography>
          <Typography variant="body2">{player.role}</Typography>
        </Box>
      </Box>
      <Box className={style.labels_block}>
        {player.labels.map((label, index) => (
          <img
            className="mx-2"
            width={35}
            key={index}
            src={label.icon.url}
            alt="label"
          />
        ))}
      </Box>
    </Stack>
  );
};

export default PlayerInfo;
