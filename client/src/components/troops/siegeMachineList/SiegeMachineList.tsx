import React from "react";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";

const SiegeMachineList = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <h1>Loading...</h1>;
  if (error) return <h1>{JSON.stringify(error)}</h1>;

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
