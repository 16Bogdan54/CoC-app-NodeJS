import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";

const ClanDescription = () => {
  const clan = useQueryCache<Clan>("clanData");

  return (
    <div className="flex items-start">
      <img className="p-2" width={100} src={clan.badge.url} alt="badge" />
      <div className="p-3">
        <h2>{clan.name}</h2>
        <h3>{clan.tag}</h3>
        <p className="mt-2">{clan.description}</p>
        <div className="flex items-center gap-4 mt-2">
          {clan.labels.map((label, index) => (
            <img width={50} key={index} src={label.icon.url} alt="label" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClanDescription;
