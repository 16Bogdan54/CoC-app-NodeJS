import React from "react";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";

const PlayerInfo = () => {
  const [status, error, player] = usePlayerFetch();

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <div>
      <h1>{player.expLevel}</h1>
      <h1>{player.name}</h1>
      <h1>{player.tag}</h1>
      <h1>{player.role}</h1>
    </div>
  );
};

export default PlayerInfo;
