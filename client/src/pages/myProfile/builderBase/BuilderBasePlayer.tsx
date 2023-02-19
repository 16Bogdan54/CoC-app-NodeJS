import PlayerVersus from "@/components/player/PlayerVersus";
import BuilderBaseTroops from "@/components/troops/builderBaseTroops/BuilderBaseTroops";
import BuilderBaseHeroes from "@/components/troops/builderBaseHeroes/BuilderBaseHeroes";
import Achievements from "@/components/achievements/Achievements";
import { motion } from "framer-motion";

const BuilderBasePlayer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PlayerVersus />
      <hr />
      <BuilderBaseTroops />
      <hr />
      <Achievements />
    </motion.div>
  );
};

export default BuilderBasePlayer;
