import { useQueryCache } from "@/hooks/useQueryCache";

const PlayerInfo = () => {
  const player = useQueryCache("playerData");

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
