import { useQueryCache } from "@/hooks/useQueryCache";
import { getIconURL } from "@/components/utils/utils";
import { Player } from "clashofclans.js";
import Unit from "@/components/troops/unit/Unit";

import style from "@/components/troops/styles/units.module.css";
import React from "react";
import { Stack, Typography } from "@mui/material";

const BuilderBaseHeroes = () => {
  const player = useQueryCache<Player>("playerData");

  return (
    <>
      <Typography variant="h5">Heroes</Typography>
      <Stack direction="row" spacing={2} py={1}>
        {player.heroes.map((hero, index) => {
          if (hero.village === "builderBase") {
            return (
              <Unit
                key={index}
                picURL={getIconURL(hero.name)}
                lvl={hero.level}
              />
            );
          }
        })}
      </Stack>
    </>
  );
};

export default BuilderBaseHeroes;
