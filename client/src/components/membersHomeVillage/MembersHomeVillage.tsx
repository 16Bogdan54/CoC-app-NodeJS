import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const MembersHomeVillage = () => {
  const clan = useQueryCache<Clan>("clanData");

  const columns: GridColDef[] = [
    { field: "id", headerName: "Rank", type: "number" },
    { field: "name", headerName: "Name" },
    { field: "role", headerName: "Role" },
    { field: "donations", headerName: "Troops Donated", type: "number" },
    { field: "received", headerName: "Troops Recieved", type: "number" },
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
    <div style={{ height: 400 }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
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
