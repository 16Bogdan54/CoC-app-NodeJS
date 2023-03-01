import { Box, Typography } from "@mui/material";
import React from "react";
import { useClanFetch } from "@/hooks/useClanFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import { useQueryClient } from "@tanstack/react-query";
import { Clan } from "clashofclans.js";

const SearchPlayer = ({ clan }: { clan: Clan }) => {
  const queryClient = useQueryClient();

  return (
    <div>
      {/*<img width={90} src={clan.badge.url} alt="clan badge" />*/}
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
    </div>
  );
};

export default SearchPlayer;
