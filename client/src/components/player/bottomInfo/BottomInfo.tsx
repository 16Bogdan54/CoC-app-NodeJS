import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

const BottomInfo = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div className="flex justify-between align-center">
      <div>
        <span>Troops donated:</span>
        <span>{player.donations}</span>
      </div>
      <div>
        <span>Troops received</span>
        <span>{player.received}</span>
      </div>
      <div>
        <span>Attacks Won:</span>
        <span>{player.attackWins}</span>
      </div>
      <div>
        <span>Defenses Won</span>
        <span>{player.defenseWins}</span>
      </div>
    </div>
  );
};

export default BottomInfo;
