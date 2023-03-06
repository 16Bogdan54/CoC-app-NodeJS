import PlayerHome from "@/components/player/PlayerHome";
import Units from "@/components/troops/Units";
import Achievements from "@/components/achievements/Achievements";
import { motion } from "framer-motion";

const HomeVillagePlayer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PlayerHome />
      <Units />
      <Achievements />
    </motion.div>
  );
};

export default HomeVillagePlayer;
