import { Typography } from "@mui/material";
import React from "react";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";

import style from "@/components/player/playerInfo/player_info.module.css";
import Unit from "@/components/troops/unit/Unit";
import { getIconURL } from "@/components/utils/utils";
import Achievement from "@/components/achievements/achievement/Achievement";

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
      <div className="flex items-center">
        <div className={style.exp_lvl}>{player.expLevel}</div>
        <div>
          <Typography variant="h4">{player.name}</Typography>
          <Typography variant="h5">{player.tag}</Typography>
          <Typography variant="body1">{player.role}</Typography>
        </div>
      </div>
      {player.labels && (
        <div className="flex">
          {player.labels.map((label, index) => (
            <img key={index} width={50} src={label.icon.url} alt={label.name} />
          ))}
        </div>
      )}
      <div className={style.clanInfo_container}>
        <Typography variant="h5">{player.clan?.name}</Typography>
        <img width={100} src={player.clan?.badge.url} alt="clan logo" />
      </div>
      <div>
        <div className={style.league_block}>
          <img width={100} src={player.league.icon.url} alt="league icon" />
          <div>
            <h1>{player.league.name}</h1>
            <h1>{player.trophies}</h1>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className={style.war_stars_block}>
            <h1>War Stars Won:</h1>
            <div className="flex justify-between items-center bg-[#3a385d] rounded-md px-1">
              <span>🌟</span>
              <h1>{player.warStars}</h1>
            </div>
          </div>
          <div className={style.trophies_block}>
            <h1>All time best:</h1>
            <div className="flex justify-between items-center bg-[#3a385d] rounded-md px-1">
              <span>🏆</span>
              <span>{player.bestTrophies}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Typography variant="h5">Troops</Typography>
        <div className="flex items-center justify-center flex-wrap gap-2 my-2 text-white">
          {player.troops.map((troop, index) => {
            if (
              troop.village === "home" &&
              !troop.originalName &&
              troop.unlockBuilding !== "Workshop"
            ) {
              return (
                <Unit
                  key={index}
                  picURL={getIconURL(troop.name)}
                  lvl={troop.level}
                />
              );
            }
          })}
        </div>
      </div>
      <div>
        <Typography variant="h5">Spells</Typography>
        <div className="flex items-center justify-center flex-wrap gap-2 my-2 text-white">
          {player.spells.map((spell, index) => (
            <Unit
              key={index}
              picURL={getIconURL(spell.name)}
              lvl={spell.level}
            />
          ))}
        </div>
      </div>
      <div>
        <Typography variant="h5">Heroes</Typography>
        <div className="flex items-center justify-center flex-wrap gap-2 my-2 text-white">
          {player.heroes.map((hero, index) => {
            if (hero.village === "home") {
              return (
                <Unit
                  key={index}
                  picURL={getIconURL(hero.name)}
                  lvl={hero.level}
                />
              );
            }
          })}
        </div>
      </div>
      <div>
        <Typography variant="h5">Siege Machines</Typography>
        <div className="flex items-center justify-center flex-wrap gap-2 my-2 text-white">
          {player.troops.map((troop, index) => {
            if (troop.unlockBuilding === "Workshop") {
              return (
                <Unit
                  key={index}
                  picURL={getIconURL(troop.name)}
                  lvl={troop.level}
                />
              );
            }
          })}
        </div>
      </div>
      <div>
        <h2 className="text-2xl">⚔Home Village Achievements</h2>
        {player.achievements
          .filter(
            (achievement) =>
              achievement.village === "home" && achievement.stars !== 0
          )
          .map((achievement, index) => (
            <div key={index}>
              <Achievement
                name={achievement.name}
                info={achievement.info}
                stars={achievement.stars}
              />
            </div>
          ))}
        <h2 className="text-2xl">⚔Builder Base Achievements</h2>
        {player.achievements
          .filter(
            (achievement) =>
              achievement.village === "builderBase" && achievement.stars !== 0
          )
          .map((achievement, index) => (
            <div key={index}>
              <Achievement
                name={achievement.name}
                info={achievement.info}
                stars={achievement.stars}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchPlayer;
