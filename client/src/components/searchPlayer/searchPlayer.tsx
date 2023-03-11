import { usePlayerFetch } from "@/hooks/usePlayerFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import TopPanel from "@/components/searchPlayer/Player/TopPanel";
import Units from "@/components/searchPlayer/Units/Units";
import { Achievements } from "@/components/searchPlayer/achievements/Achievements";

type Props = {
  tag: string;
};

const SearchPlayer = ({ tag }: Props) => {
  const [status, error, player] = usePlayerFetch(
    `http://localhost:3001/players/player-search/${tag}`,
    "playerSearch"
  );

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <div>
      <TopPanel />
      <Units />
      <Achievements player={player} />
    </div>
  );
};

export default SearchPlayer;
