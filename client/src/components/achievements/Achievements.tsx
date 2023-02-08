import React from "react";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";

const Achievements = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

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
