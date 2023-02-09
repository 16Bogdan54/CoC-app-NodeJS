import React from "react";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import { renderStars } from "@/components/utils/utils";

const Achievements = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <div>
      <h1>⚔Home Village Achievements</h1>
      {player.achievements
        .filter((achievement) => achievement.village === "home")
        .map((achievement, index) => (
          <div key={index}>
            {/*<h1>{achievement.stars}</h1>*/}
            <h1>{renderStars(achievement.stars)}</h1>
            <h1>{achievement.name}</h1>
            <h1>{achievement.info}</h1>
          </div>
        ))}
      <h1>⚔Builder Base Achievements</h1>
      {player.achievements
        .filter(
          (achievement) =>
            achievement.village === "builderBase" && achievement.stars !== 0
        )
        .map((achievement, index) => (
          <div key={index}>
            {/*<h1>{achievement.stars}</h1>*/}
            <h1>{renderStars(achievement.stars)}</h1>
            <h1>{achievement.name}</h1>
            <h1>{achievement.info}</h1>
          </div>
        ))}
    </div>
  );
};

export default Achievements;
