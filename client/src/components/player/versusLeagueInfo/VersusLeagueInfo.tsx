import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

const VersusLeagueInfo = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div>
      <h1>{player.versusTrophies}</h1>
      <h1>{player.bestVersusTrophies}</h1>
    </div>
  );
};

export default VersusLeagueInfo;
