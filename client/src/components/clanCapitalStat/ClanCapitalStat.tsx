import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";

const ClanCapitalStat = () => {
  const clan = useQueryCache<Clan>("clanData");

  return (
    <div>
      <h1>Capital League:</h1>
      <span>{clan.capitalLeague?.name}</span>
      <h1>Capital Trophies:</h1>
      <span>{clan.capitalPoints}</span>
      <h1>Clan Location:</h1>
      <span>{clan.location?.name}</span>
      <h1>Chat Language</h1>
      <span>{clan.chatLanguage?.name}</span>
      <h1>Type:</h1>
      <span>{clan.type}</span>
      <h1>Required trophies:</h1>
      <span>{clan.requiredTrophies}</span>
      <span className="mx-2">{clan.requiredVersusTrophies}</span>
      <h1>Required Town Hall level:</h1>
      <span>{clan.requiredTownHallLevel}</span>
    </div>
  );
};

export default ClanCapitalStat;
