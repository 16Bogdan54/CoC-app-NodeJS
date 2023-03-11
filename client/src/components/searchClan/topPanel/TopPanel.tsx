import React from "react";
import { Clan } from "clashofclans.js";
import { Box, Grid, Stack, Table, TableBody, Typography } from "@mui/material";
import ClanStatItem from "@/components/clanStatItem/ClanStatItem";

type Props = {
  clan: Clan;
};

const TopPanel = ({ clan }: Props) => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Stack direction="column" alignItems="start">
          <Stack direction="row" alignItems="center">
            <img width={100} src={clan.badge.url} alt="badge" />
            <Box>
              <Typography variant="h5">{clan.name}</Typography>
              <Typography variant="h6">{clan.tag}</Typography>
            </Box>
          </Stack>
          <Typography variant="body2">{clan.description}</Typography>
          <Box className="flex items-center gap-4 mt-2">
            {clan.labels.map((label, index) => (
              <img width={40} key={index} src={label.icon.url} alt="label" />
            ))}
          </Box>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
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
      </Grid>
    </>
  );
};

export default TopPanel;
