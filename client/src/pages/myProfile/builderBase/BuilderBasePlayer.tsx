import PlayerVersus from "@/components/player/PlayerVersus";
import BuilderBaseTroops from "@/components/troops/builderBaseTroops/BuilderBaseTroops";
import BuilderBaseHeroes from "@/components/troops/builderBaseHeroes/BuilderBaseHeroes";
import Achievements from "@/components/achievements/Achievements";

const BuilderBasePlayer = () => {
  return (
    <div>
      <PlayerVersus />
      <hr />
      <BuilderBaseTroops />
      <hr />
      <Achievements />
    </div>
  );
};

export default BuilderBasePlayer;
