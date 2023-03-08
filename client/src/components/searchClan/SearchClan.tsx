import {
  Box,
  CardContent,
  Grid,
  Stack,
  Table,
  TableBody,
  Typography,
} from "@mui/material";
import React from "react";
import { useClanFetch } from "@/hooks/useClanFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import ClanStatItem from "@/components/clanStatItem/ClanStatItem";

type Props = {
  tag: string;
};

const SearchClan = ({ tag }: Props) => {
  const [status, error, clan] = useClanFetch(
    `http://localhost:3001/clans/clan-search/${tag}`,
    "searchClan"
  );

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <Grid
      container
      spacing={1}
      className="text-white grid grid-cols-2 p-2 rounded-lg"
    >
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
      <Grid item xs={12}>
        <Grid container spacing={1}>
          {clan.members.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <CardContent className="bg-[#3681D8] rounded-lg">
                <Box className="flex items-center justify-between">
                  <Typography sx={{ fontSize: 16 }} color="text.secondary">
                    {member.clanRank}. {member.trophies}
                  </Typography>
                  <img width={40} src={member.league.icon.url} alt="league" />
                </Box>
                <Typography variant="h5">{member.name}</Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {member.role}
                </Typography>
                <Typography variant="body2">
                  Troops donated: {member.donations}
                  <br />
                  Troops received: {member.donations}
                </Typography>
              </CardContent>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
    // // <div>
    // //   <img width={90} src={clan.badge.url} alt="clan badge" />
    // /*  <Typography variant="h4"> {clan.name}</Typography>*/
    // {/*  <Typography variant="h5">{clan.tag}</Typography>*/}
    // {/*  <Typography variant="body1">{clan.description}</Typography>*/}
    // {/*  {clan.labels && (*/}
    // {/*    <div className="flex">*/}
    // {/*      {clan.labels.map((label, index) => (*/}
    // {/*        <img key={index} width={50} src={label.icon.url} alt={label.name} />*/}
    // {/*      ))}*/}
    // {/*    </div>*/}
    // {/*  )}*/}
    // {/*  <div className="p-4">*/}
    // {/*    <ClanStatItem heading="Clan War League">*/}
    // {/*      <span>{clan.warLeague?.name}</span>*/}
    // {/*    </ClanStatItem>*/}
    // {/*    <ClanStatItem heading="Total points">*/}
    // {/*      <span>🏆{clan.points}</span>*/}
    // {/*      <span>🏆{clan.versusPoints}</span>*/}
    // {/*    </ClanStatItem>*/}
    // {/*    <ClanStatItem heading="Clan Location">*/}
    // {/*      <span>{clan.location?.name}</span>*/}
    // {/*    </ClanStatItem>*/}
    // {/*    <ClanStatItem heading="Chat Language">*/}
    // {/*      <span>{clan.chatLanguage?.name}</span>*/}
    // {/*    </ClanStatItem>*/}
    // {/*    <ClanStatItem heading="Type">*/}
    // {/*      <span>{clan.type}</span>*/}
    // {/*    </ClanStatItem>*/}
    // {/*    <ClanStatItem heading="Required trophies">*/}
    // {/*      <span>{clan.requiredTrophies}</span>*/}
    // {/*    </ClanStatItem>*/}
    // {/*    <ClanStatItem heading="Required trophies">*/}
    // {/*      <span>{clan.requiredTrophies}</span>*/}
    // {/*    </ClanStatItem>*/}
    // {/*    <ClanStatItem heading="Required Town Hall level">*/}
    // {/*      <span>{clan.requiredTownHallLevel}</span>*/}
    // {/*    </ClanStatItem>*/}
    // {/*  </div>*/}
    // {/*  <div>*/}
    // {/*    {clan.members.map((member, index) => (*/}
    // {/*      <div*/}
    // {/*        className="flex items-center justify-between gap-6 p-3 bg-[#d5d8cc] m-2 rounded-lg"*/}
    // {/*        key={index}*/}
    // {/*      >*/}
    // {/*        <span>{member.clanRank}.</span>*/}
    // {/*        <img width={40} src={member.league.icon.url} alt="league" />*/}
    // {/*        <div className="flex-1">*/}
    // {/*          <h3>{member.name}</h3>*/}
    // {/*          <span>{member.role}</span>*/}
    // {/*        </div>*/}
    // {/*        <div>*/}
    // {/*          <h3>Troops donated:</h3>*/}
    // {/*          <span>{member.donations}</span>*/}
    // {/*        </div>*/}
    // {/*        <div>*/}
    // {/*          <h3>Troops received:</h3>*/}
    // {/*          <span>{member.received}</span>*/}
    // {/*        </div>*/}
    // {/*        <span>{member.trophies}🏆</span>*/}
    // {/*      </div>*/}
    // {/*    ))}*/}
    // {/*  </div>*/}
    // {/*</div>*/}
    // );
  );
};

export default SearchClan;
