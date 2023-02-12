import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

const PlayerInfo = () => {
  const player = useQueryCache<Player>("playerData");

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
