import React from "react";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";

const Achievements = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <h1>Loading...</h1>;
  if (error) return <h1>{JSON.stringify(error)}</h1>;

  return (
    <div>
      {player.achievements.map((achievement, index) => (
        <div key={index}>
          <h1>{achievement.stars}</h1>
          <h1>{achievement.name}</h1>
          <h1>{achievement.info}</h1>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
