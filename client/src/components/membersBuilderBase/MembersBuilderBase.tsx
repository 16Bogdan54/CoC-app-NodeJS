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
          <span>{member.clanRank}.</span>
          <span>{member.expLevel}</span>
          <div className="flex-1">
            <h3>{member.name}</h3>
            <span>{member.role}</span>
          </div>
          <span className="">{member.versusTrophies}🏆</span>
        </div>
      ))}
    </div>
  );
};

export default MembersBuilderBase;
