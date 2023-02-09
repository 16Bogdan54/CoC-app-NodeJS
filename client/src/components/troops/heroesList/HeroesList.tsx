import React from "react";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import { getIconURL } from "@/components/utils/utils";

const HeroesList = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <div>
      {player.heroes.map((hero, index) => {
        if (hero.village === "home") {
          return (
            <div key={index}>
              <h1>{hero.name}</h1>
              <h1>{hero.level}</h1>
              <img src={getIconURL(hero.name)} alt="icon" />
            </div>
          );
        }
      })}
    </div>
  );
};

export default HeroesList;
