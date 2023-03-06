import { useQueryCache } from "@/hooks/useQueryCache";
import { Player } from "clashofclans.js";
import style from "./player_info.module.css";
import { Stack } from "@mui/material";

const PlayerInfo = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{ background: "red" }}
    >
      <div className="flex items-center">
        <div className={style.exp_lvl}>{player.expLevel}</div>
        <div>
          <h2 className="text-2xl text-white font-bold">{player.name}</h2>
          <span className="text-lg text-gray-200">{player.tag}</span>
          <h3 className="text-xl text-white">{player.role}</h3>
        </div>
      </div>
      <div className={style.labels_block}>
        {player.labels.map((label, index) => (
          <img
            className="mx-2"
            width={35}
            key={index}
            src={label.icon.url}
            alt="label"
          />
        ))}
      </div>
    </Stack>
  );
};

export default PlayerInfo;
