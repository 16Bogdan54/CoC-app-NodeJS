import Achievement from "@/components/achievements/achievement/Achievement";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

const Achievements = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div>
      <h2>⚔Home Village Achievements</h2>
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
      <h2>⚔Builder Base Achievements</h2>
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
