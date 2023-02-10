import { useQueryCache } from "@/hooks/useQueryCache";

const VersusLeagueInfo = () => {
  const player = useQueryCache("playerData");

  return (
    <div>
      <h1>{player.versusTrophies}</h1>
      <h1>{player.bestVersusTrophies}</h1>
    </div>
  );
};

export default VersusLeagueInfo;
