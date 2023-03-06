import Achievement from "@/components/achievements/achievement/Achievement";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Achievements = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div>
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
    </div>
  );
};

export default Achievements;
