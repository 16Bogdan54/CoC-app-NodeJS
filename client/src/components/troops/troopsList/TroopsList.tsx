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
    <div className="w-full flex items-center justify-center">
      {player.troops.map((troop, index) => {
        if (troop.village === "home" && !troop.originalName) {
          return (
            <div key={index}>
              {/*<h1>{troop.name}</h1>*/}
              <img width={50} src={getIconURL(troop.name)} alt="icon" />
              <h1>{troop.level}</h1>
            </div>
          );
        }
      })}
    </div>
  );
};

export default TroopsList;
