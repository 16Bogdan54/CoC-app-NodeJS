import { useQueryCache } from "@/hooks/useQueryCache";

const ClanInfo = () => {
  const player = useQueryCache("playerData");

  return (
    <div>
      <h1>{player.clan?.name}</h1>
      <img width={100} src={player.clan?.badge.url} alt="clan logo" />
    </div>
  );
};

export default ClanInfo;
