import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";

const ClanDescription = () => {
  const clan = useQueryCache<Clan>("clanData");

  return (
    <div>
      <img width={100} src={clan.badge.url} alt="badge" />
      <h1>{clan.name}</h1>
      <h1>{clan.tag}</h1>
      <p>{clan.description}</p>
      {clan.labels.map((label, index) => (
        <img width={50} key={index} src={label.icon.url} alt="label" />
      ))}
    </div>
  );
};

export default ClanDescription;
