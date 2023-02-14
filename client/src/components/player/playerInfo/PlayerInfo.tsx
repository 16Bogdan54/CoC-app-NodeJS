import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";
import ExperienceLevel from "@/components/player/playerInfo/expirienceLevel/ExperienceLevel";

const PlayerInfo = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <div>
      {/*<h1>{player.expLevel}*/}
      <ExperienceLevel expLvl={player.expLevel} />
      <h1>{player.name}</h1>
      <h1>{player.tag}</h1>
      <h1>{player.role}</h1>
      {player.labels.map((label, index) => (
        <img width={30} key={index} src={label.icon.url} alt="label" />
      ))}
    </div>
  );
};

export default PlayerInfo;
