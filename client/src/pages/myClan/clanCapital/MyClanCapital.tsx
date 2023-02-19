import ClanDescription from "@/components/clanDescription/ClanDescription";
import ClanCapitalStat from "@/components/clanCapitalStat/ClanCapitalStat";
import MembersHomeVillage from "@/components/membersHomeVillage/MembersHomeVillage";
import { motion } from "framer-motion";

const MyClanCapital = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-[#7d7e66] grid grid-cols-2 p-2 rounded-lg">
        <ClanDescription />
        <ClanCapitalStat />
      </div>
      <MembersHomeVillage />
    </motion.div>
  );
};

export default MyClanCapital;
