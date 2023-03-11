import Achievement from "@/components/achievements/achievement/Achievement";
import { Player } from "clashofclans.js";
import { Box } from "@mui/material";

type Props = {
  player: Player;
};

export const Achievements = ({ player }: Props) => {
  return (
    <Box>
      <h2 className="text-2xl">⚔Home Village Achievements</h2>
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
      <h2 className="text-2xl">⚔Builder Base Achievements</h2>
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
