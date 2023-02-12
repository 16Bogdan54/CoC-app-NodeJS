import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

const BottomInfo = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div>
      <div>
        <h1>Troops donated:</h1>
        <h1>{player.donations}</h1>
      </div>
      <div>
        <h1>Troops received</h1>
        <h1>{player.received}</h1>
      </div>
      <div>
        <h1>Attacks Won:</h1>
        <h1>{player.attackWins}</h1>
      </div>
      <div>
        <h1>Defenses Won</h1>
        <h1>{player.defenseWins}</h1>
      </div>
    </div>
  );
};

export default BottomInfo;
