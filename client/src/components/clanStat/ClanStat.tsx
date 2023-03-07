import ClanStatItem from "@/components/clanStatItem/ClanStatItem";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";
import { Paper, Table, TableBody, TableContainer } from "@mui/material";

const ClanStat = () => {
  const clan = useQueryCache<Clan>("clanData");

  return (
    // <TableContainer
    //   sx={{
    //     xs: {
    //       maxWidth: "350px",
    //       backgroundColor: "red",
    //     },
    //   }}
    // >
    <Table size="small">
      <TableBody
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <ClanStatItem heading="Clan War League">
          {clan.warLeague?.name}
        </ClanStatItem>
        <ClanStatItem heading="Total points">
          🏆{clan.versusPoints}
          🏆{clan.points}
        </ClanStatItem>
        <ClanStatItem heading="Clan Location">
          {clan.location?.name}
        </ClanStatItem>
        <ClanStatItem heading="Chat Language">
          {clan.chatLanguage?.name}
        </ClanStatItem>
        <ClanStatItem heading="Type">{clan.type}</ClanStatItem>
        <ClanStatItem heading="Required trophies">
          {clan.requiredTrophies}
        </ClanStatItem>
        <ClanStatItem heading="Required trophies">
          {clan.requiredTrophies}
        </ClanStatItem>
        <ClanStatItem heading="Required Town Hall level">
          {clan.requiredTownHallLevel}
        </ClanStatItem>
      </TableBody>
    </Table>
    // </TableContainer>
  );
};

export default ClanStat;
