import ClanStatItem from "@/components/clanStatItem/ClanStatItem";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";

const ClanStat = () => {
  const clan = useQueryCache<Clan>("clanData");

  return (
    <div className="p-4">
      <ClanStatItem heading="Clan War League">
        <span>{clan.warLeague?.name}</span>
      </ClanStatItem>
      <ClanStatItem heading="Total points">
        <span>🏆{clan.points}</span>
        <span>🏆{clan.versusPoints}</span>
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
        <span>{clan.requiredTrophies}</span>
      </ClanStatItem>
      <ClanStatItem heading="Required trophies">
        <span>{clan.requiredTrophies}</span>
      </ClanStatItem>
      <ClanStatItem heading="Required Town Hall level">
        <span>{clan.requiredTownHallLevel}</span>
      </ClanStatItem>
    </div>
  );
};

export default ClanStat;
