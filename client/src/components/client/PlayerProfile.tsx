import { getData } from "./utils";
import { Player } from "clashofclans.js"; // interface
import { useQuery } from "@tanstack/react-query";

const PlayerProfile = () => {
  const {
    status,
    error,
    data: player,
  } = useQuery<Player>({
    queryKey: ["playerData"],
    queryFn: getData,
  });

  if (status === "loading") return <h1>Loading...</h1>;
  if (error) return <h1>{JSON.stringify(error)}</h1>;

  return (
    <div>
      <h1>Player</h1>
      <h2>home village</h2>
      <hr />
      <h2>Name: {player && player.name}</h2>
      <h2>Tag: {player && player.tag}</h2>
      <h2>Level: {player && player.expLevel}</h2>
      <h2>Role: {player && player.role}</h2>
      <h2>Clan: {player && player.clan?.name}</h2>
      <h2>League: {player && player.league?.name}</h2>
      <img width={50} src={player && player.league?.icon.url} alt="l" />
      <h2>Trophies: {player && player.trophies}</h2>
      <h2>War Stars: {player && player.warStars}</h2>
      <h2>All time best: {player && player.bestTrophies}</h2>
      <h2>Donations: {player && player.donations}</h2>
      <h2>Received: {player && player.received}</h2>
      <h2>Attack won: {player && player.attackWins}</h2>
      <h2>Defense won: {player && player.defenseWins}</h2>
    </div>
  );
};

export default PlayerProfile;
