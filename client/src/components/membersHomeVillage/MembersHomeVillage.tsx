import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";

const MembersHomeVillage = () => {
  const clan = useQueryCache<Clan>("clanData");
  return (
    <div>
      {clan.members.map((member, index) => (
        <div
          className="flex items-center justify-between gap-6 p-3 bg-[#d5d8cc] m-2 rounded-lg"
          key={index}
        >
          <span>{member.clanRank}.</span>
          <img width={40} src={member.league.icon.url} alt="league" />
          <div className="flex-1">
            <h3>{member.name}</h3>
            <span>{member.role}</span>
          </div>
          <div>
            <h3>Troops donated:</h3>
            <span>{member.donations}</span>
          </div>
          <div>
            <h3>Troops received:</h3>
            <span>{member.received}</span>
          </div>
          <span>{member.trophies}🏆</span>
        </div>
      ))}
    </div>
  );
};

export default MembersHomeVillage;
