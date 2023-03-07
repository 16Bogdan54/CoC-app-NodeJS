import React from "react";
import { useQueryCache } from "@/hooks/useQueryCache";
import { Clan } from "clashofclans.js";
import { Box, Stack, Typography } from "@mui/material";

const ClanDescription = () => {
  const clan = useQueryCache<Clan>("clanData");

  return (
    <Stack direction="column" alignItems="start">
      <Stack direction="row" alignItems="center">
        <img width={100} src={clan.badge.url} alt="badge" />
        <Box>
          <Typography variant="h5">{clan.name}</Typography>
          <Typography variant="h6">{clan.tag}</Typography>
        </Box>
      </Stack>
      <Typography variant="body2">{clan.description}</Typography>
      <Box className="flex items-center gap-4 mt-2">
        {clan.labels.map((label, index) => (
          <img width={40} key={index} src={label.icon.url} alt="label" />
        ))}
      </Box>
    </Stack>
  );
};

export default ClanDescription;
