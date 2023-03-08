import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";
import ClanStatItem from "@/components/clanStatItem/ClanStatItem";
import { Table, TableBody } from "@mui/material";

const ClanCapitalStat = () => {
  const clan = useQueryCache<Clan>("clanData");

  return (
    <Table size="small">
      <TableBody
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <ClanStatItem heading="Capital League">
          {clan.capitalLeague?.name}
        </ClanStatItem>
        <ClanStatItem heading="Capital Trophies">
          🏆{clan.capitalPoints}
        </ClanStatItem>
        <ClanStatItem heading="Clan Location">
          {clan.location?.name}
        </ClanStatItem>
        <ClanStatItem heading="Chat Language">
          {clan.chatLanguage?.name}
        </ClanStatItem>
        <ClanStatItem heading="Type">{clan.type}</ClanStatItem>
        <ClanStatItem heading="Required trophies">
          🏆{clan.requiredTrophies}
        </ClanStatItem>
        <ClanStatItem heading="Required versus trophies">
          🏆{clan.requiredVersusTrophies}
        </ClanStatItem>
        <ClanStatItem heading="Required Town Hall level">
          {clan.requiredTownHallLevel}
        </ClanStatItem>
      </TableBody>
    </Table>
  );
};

export default ClanCapitalStat;
