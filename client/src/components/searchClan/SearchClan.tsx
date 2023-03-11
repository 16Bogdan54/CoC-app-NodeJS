import { Grid } from "@mui/material";
import { useClanFetch } from "@/hooks/useClanFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import TopPanel from "@/components/searchClan/topPanel/TopPanel";
import ClanMembers from "@/components/searchClan/clanMembers/ClanMembers";

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
    <Grid
      container
      spacing={1}
      className="text-white grid grid-cols-2 p-2 rounded-lg"
    >
      <TopPanel clan={clan} />
      <ClanMembers clan={clan} />
    </Grid>
  );
};

export default SearchClan;
