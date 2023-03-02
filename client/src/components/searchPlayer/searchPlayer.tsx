import { Typography } from "@mui/material";
import React from "react";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import ClanStatItem from "@/components/clanStatItem/ClanStatItem";
import { useClanFetch } from "@/hooks/useClanFetch";

type Props = {
  tag: string;
};

const SearchPlayer = ({ tag }: Props) => {
  const [status, error, player] = usePlayerFetch(
    `http://localhost:3001/clans/clan-search/${tag}`,
    "searchClan"
  );

  return <div></div>;
};

export default SearchPlayer;
