import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";
import ClanStatItem from "@/components/clanStatItem/ClanStatItem";

const ClanCapitalStat = () => {
  const clan = useQueryCache<Clan>("clanData");

  return (
    <div className="p-4">
      <ClanStatItem heading="Capital League">
        <span>{clan.capitalLeague?.name}</span>
      </ClanStatItem>
      <ClanStatItem heading="Capital Trophies">
        <span>{clan.capitalPoints}🏆</span>
      </ClanStatItem>
      <ClanStatItem heading="Clan Location">
        <span>{clan.location?.name}</span>
      </ClanStatItem>
      <ClanStatItem heading="Chat Language">
        <span>{clan.chatLanguage?.name}</span>
      </ClanStatItem>
      <ClanStatItem heading="Type">
        <span>{clan.type}</span>
      </ClanStatItem>
      <ClanStatItem heading="Required trophies">
        <span>{clan.requiredTrophies}🏆</span>
        <span>{clan.requiredVersusTrophies}🏆</span>
      </ClanStatItem>
      <ClanStatItem heading="Required Town Hall level">
        <span>{clan.requiredTownHallLevel}</span>
      </ClanStatItem>
    </div>
  );
};

export default ClanCapitalStat;
