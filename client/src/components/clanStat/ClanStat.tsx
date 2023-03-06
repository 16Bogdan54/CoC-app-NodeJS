import ClanStatItem from "@/components/clanStatItem/ClanStatItem";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

function Tablebody() {
  return null;
}

const ClanStat = () => {
  const clan = useQueryCache<Clan>("clanData");

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Clan Statistics</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
          <TableRow>
            <TableCell component="th" scope="row">
              Clan War League
            </TableCell>
            <TableCell align="right">{clan.warLeague?.name}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    // <div className="p-4">
    //   <ClanStatItem heading="Clan War League">
    //     <span>{clan.warLeague?.name}</span>
    //   </ClanStatItem>
    //   <ClanStatItem heading="Total points">
    //     <span>🏆{clan.points}</span>
    //     <span>🏆{clan.versusPoints}</span>
    //   </ClanStatItem>
    //   <ClanStatItem heading="Clan Location">
    //     <span>{clan.location?.name}</span>
    //   </ClanStatItem>
    //   <ClanStatItem heading="Chat Language">
    //     <span>{clan.chatLanguage?.name}</span>
    //   </ClanStatItem>
    //   <ClanStatItem heading="Type">
    //     <span>{clan.type}</span>
    //   </ClanStatItem>
    //   <ClanStatItem heading="Required trophies">
    //     <span>{clan.requiredTrophies}</span>
    //   </ClanStatItem>
    //   <ClanStatItem heading="Required trophies">
    //     <span>{clan.requiredTrophies}</span>
    //   </ClanStatItem>
    //   <ClanStatItem heading="Required Town Hall level">
    //     <span>{clan.requiredTownHallLevel}</span>
    //   </ClanStatItem>
    // </div>
  );
};

export default ClanStat;
