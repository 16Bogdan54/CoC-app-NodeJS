import { useQueryCache } from "@/hooks/useQueryCache";

const LeagueInfo = () => {
  const player = useQueryCache("playerData");

  return (
    <div>
      <div>
        <img width={100} src={player.league.icon.url} alt="league icon" />
        <h1>{player.league.name}</h1>
        <h1>{player.trophies}</h1>
      </div>
      <div>
        <h1>War Stars Won:</h1>
        <h1>{player.warStars}</h1>
      </div>
      <div>
        <h1>All time best:</h1>
        <h1>{player.bestTrophies}</h1>
      </div>
    </div>
  );
};

export default LeagueInfo;
