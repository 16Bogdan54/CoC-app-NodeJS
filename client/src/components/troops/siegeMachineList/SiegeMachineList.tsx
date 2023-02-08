import React from "react";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";

const SiegeMachineList = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <div>
      {player.siegeMachines.map((machine, index) => (
        <div key={index}>
          <h1>{machine.name}</h1>
          <h1>{machine.level}</h1>
        </div>
      ))}
    </div>
  );
};

export default SiegeMachineList;
