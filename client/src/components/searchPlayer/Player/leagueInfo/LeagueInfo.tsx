import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";
import StarIcon from "@mui/icons-material/Star";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

import style from "src/components/searchPlayer/Player/leagueInfo/league.module.css";
import { Box, Stack, Typography } from "@mui/material";

const LeagueInfo = () => {
  const player = useQueryCache<Player>("playerSearch");

  return (
    <Stack justifyContent="center" alignItems="center">
      <Box className={style.league_block}>
        <img width={100} src={player.league.icon.url} alt="league icon" />
        <Box>
          <Typography variant="h6">{player.league.name}</Typography>
          <Typography variant="body1">{player.trophies}</Typography>
        </Box>
      </Box>
      <Box className="flex gap-4 items-center">
        <Box className={style.war_stars_block}>
          <Typography variant="body1">War Stars Won:</Typography>
          <Box className="flex justify-between items-center bg-[#3681D8] rounded-md px-1">
            <StarIcon />
            <Typography variant="body2">{player.warStars}</Typography>
          </Box>
        </Box>
        <Box className={style.trophies_block}>
          <Typography variant="body1">All time best:</Typography>
          <Box className="flex justify-between items-center bg-[#3681D8] rounded-md px-1">
            <EmojiEventsIcon />
            <Typography variant="body2">{player.bestTrophies}</Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default LeagueInfo;
