import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";

const MembersBuilderBase = () => {
  const clan = useQueryCache<Clan>("clanData");
  return (
    <div>
      {clan.members.map((member, index) => (
        <div
          className="flex items-center justify-between gap-6 p-3 bg-[#d5d8cc] m-2 rounded-lg"
          key={index}
        >
          <h1>{member.clanRank}.</h1>
          <h1>{member.expLevel}</h1>
          <div className="flex-1">
            <h1>{member.name}</h1>
            <h1>{member.role}</h1>
          </div>
          <span className="">{member.versusTrophies}🏆</span>
        </div>
      ))}
    </div>
  );
};

export default MembersBuilderBase;
