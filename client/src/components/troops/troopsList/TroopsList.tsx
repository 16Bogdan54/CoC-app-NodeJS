import React from "react";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import { getIconURL } from "@/components/utils/utils";

const TroopsList = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <div>
      {player.troops.map((troop, index) => (
        <div key={index}>
          <h1>{troop.name}</h1>
          <h1>{troop.level}</h1>
          <img src={getIconURL(troop.name)} alt="icon" />
        </div>
      ))}
    </div>
  );
};

export default TroopsList;
