import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, CardContent, Grid, Typography } from "@mui/material";

const MembersHomeVillage = () => {
  const clan = useQueryCache<Clan>("clanData");

  return (
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

    // <div>
    //   {clan.members.map((member, index) => (
    //     <div
    //       className="flex items-center justify-between gap-6 p-3 bg-[#d5d8cc] m-2 rounded-lg"
    //       key={index}
    //     >
    //       <span>{member.clanRank}.</span>
    //       <img width={40} src={member.league.icon.url} alt="league" />
    //       <div className="flex-1">
    //         <h3>{member.name}</h3>
    //         <span>{member.role}</span>
    //       </div>
    //       <div>
    //         <h3>Troops donated:</h3>
    //         <span>{member.donations}</span>
    //       </div>
    //       <div>
    //         <h3>Troops received:</h3>
    //         <span>{member.received}</span>
    //       </div>
    //       <span>{member.trophies}🏆</span>
    //     </div>
    //   ))}
    // </div>
  );
};

export default MembersHomeVillage;
