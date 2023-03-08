import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box, CardContent, Grid, Typography } from "@mui/material";

const MembersHomeVillage = () => {
  const clan = useQueryCache<Clan>("clanData");

  const columns: GridColDef[] = [
    { field: "id", headerName: "Rank", type: "number", width: 30 },
    { field: "name", headerName: "Name", width: 140 },
    { field: "role", headerName: "Role" },
    {
      field: "donations",
      headerName: "Troops Donated",
      type: "number",
      width: 120,
    },
    {
      field: "received",
      headerName: "Troops Recieved",
      type: "number",
      width: 120,
    },
    { field: "trophies", headerName: "Trophies", type: "number" },
  ];

  const rows = clan.members.map((member) =>
    //  changes the rank key to the id, since MUI requires id
    Object.assign(member, { id: member.clanRank })
  );

  console.log(
    clan.members.map((member) => Object.assign(member, { id: member.clanRank }))
  );
  console.log(typeof clan.members);

  return (
    // <Box sx={{ height: 400, width: 350 }}>
    //   <DataGrid
    //     sx={{ border: "none", color: "white" }}
    //     // autoPageSize={true}
    //     // density="compact"
    //     rows={rows}
    //     columns={columns}
    //     className="bg-[#3681D8]"
    //   />
    // </Box>

    <Grid container spacing={1}>
      {clan.members.map((member, index) => (
        <Grid item xs={12} sm={6} md={4}>
          <CardContent className="bg-[#3681D8] rounded-lg">
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {member.clanRank}. {member.trophies}🏆
            </Typography>
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
