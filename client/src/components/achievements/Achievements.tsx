import Achievement from "@/components/achievements/achievement/Achievement";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";
import GradeOutlinedIcon from "@mui/icons-material/GradeOutlined";
import { Box, Typography } from "@mui/material";

const Achievements = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <Box className="text-white">
      <Typography variant="h5">
        <GradeOutlinedIcon />
        Home Village Achievements
      </Typography>
      {player.achievements
        .filter(
          (achievement) =>
            achievement.village === "home" && achievement.stars !== 0
        )
        .map((achievement, index) => (
          <div key={index}>
            <Achievement
              name={achievement.name}
              info={achievement.info}
              stars={achievement.stars}
            />
          </div>
        ))}
      <Typography variant="h5">
        <GradeOutlinedIcon />
        Builder Base Achievements
      </Typography>
      {player.achievements
        .filter(
          (achievement) =>
            achievement.village === "builderBase" && achievement.stars !== 0
        )
        .map((achievement, index) => (
          <div key={index}>
            <Achievement
              name={achievement.name}
              info={achievement.info}
              stars={achievement.stars}
            />
          </div>
        ))}
    </Box>
  );
};

export default Achievements;
