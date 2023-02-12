import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";

const ClanInfo = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div>
      <h1>{player.clan?.name}</h1>
      <img width={100} src={player.clan?.badge.url} alt="clan logo" />
    </div>
  );
};

export default ClanInfo;
