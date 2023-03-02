import { Typography } from "@mui/material";
import React from "react";
import { useClanFetch } from "@/hooks/useClanFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import ClanStatItem from "@/components/clanStatItem/ClanStatItem";

type Props = {
  tag: string;
};

const SearchClan = ({ tag }: Props) => {
  const [status, error, clan] = useClanFetch(
    `http://localhost:3001/clans/clan-search/${tag}`,
    "searchClan"
  );

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <div>
      <img width={90} src={clan.badge.url} alt="clan badge" />
      <Typography variant="h4"> {clan.name}</Typography>
      <Typography variant="h5">{clan.tag}</Typography>
      <Typography variant="body1">{clan.description}</Typography>
      {clan.labels && (
        <div className="flex">
          {clan.labels.map((label, index) => (
            <img key={index} width={50} src={label.icon.url} alt={label.name} />
          ))}
        </div>
      )}
      <div className="p-4">
        <ClanStatItem heading="Clan War League">
          <span>{clan.warLeague?.name}</span>
        </ClanStatItem>
        <ClanStatItem heading="Total points">
          <span>🏆{clan.points}</span>
          <span>🏆{clan.versusPoints}</span>
        </ClanStatItem>
        <ClanStatItem heading="Clan Location">
          <span>{clan.location?.name}</span>
        </ClanStatItem>
        <ClanStatItem heading="Chat Language">
          <span>{clan.chatLanguage?.name}</span>
        </ClanStatItem>
        <ClanStatItem heading="Type">
          <span>{clan.type}</span>
        </ClanStatItem>
        <ClanStatItem heading="Required trophies">
          <span>{clan.requiredTrophies}</span>
        </ClanStatItem>
        <ClanStatItem heading="Required trophies">
          <span>{clan.requiredTrophies}</span>
        </ClanStatItem>
        <ClanStatItem heading="Required Town Hall level">
          <span>{clan.requiredTownHallLevel}</span>
        </ClanStatItem>
      </div>
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
    </div>
  );
};

export default SearchClan;
