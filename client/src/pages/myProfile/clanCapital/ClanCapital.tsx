import PlayerClanCapital from "@/components/player/PlayerClanCapital";
import Achievements from "@/components/achievements/Achievements";
import { motion } from "framer-motion";

const ClanCapital = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <PlayerClanCapital />
      <hr />
      <Achievements />
    </motion.div>
  );
};

export default ClanCapital;
