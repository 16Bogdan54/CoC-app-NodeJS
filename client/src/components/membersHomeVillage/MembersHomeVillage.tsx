import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";

const MembersHomeVillage = () => {
  const clan = useQueryCache<Clan>("clanData");
  return (
    <div>
      {clan.members.map((member, index) => (
        <div key={index}>
          <h1>{member.clanRank}</h1>
          <img width={30} src={member.league.icon.url} alt="league" />
          <h1>{member.name}</h1>
          <h1>{member.role}</h1>
          <h1>Troops donated:</h1>
          <span>{member.donations}</span>
          <h1>Troops received:</h1>
          <span>{member.received}</span>
          <h1>{member.trophies}</h1>
        </div>
      ))}
    </div>
  );
};

export default MembersHomeVillage;
