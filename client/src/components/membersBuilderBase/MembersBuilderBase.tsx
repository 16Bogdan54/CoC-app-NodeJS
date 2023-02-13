import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";

const MembersBuilderBase = () => {
  const clan = useQueryCache<Clan>("clanData");
  return (
    <div>
      {clan.members.map((member, index) => (
        <div key={index}>
          <h1>{member.clanRank}</h1>
          <h1>{member.expLevel}</h1>
          <h1>{member.name}</h1>
          <h1>{member.role}</h1>
          <h1>{member.versusTrophies}</h1>
        </div>
      ))}
    </div>
  );
};

export default MembersBuilderBase;
