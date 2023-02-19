import ClanDescription from "@/components/clanDescription/ClanDescription";
import ClanStat from "@/components/clanStat/ClanStat";
import MembersHomeVillage from "@/components/membersHomeVillage/MembersHomeVillage";
import { motion } from "framer-motion";

const HomeVillageClan = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="bg-[#7d7e66] grid grid-cols-2 p-2 rounded-lg">
        <ClanDescription />
        <ClanStat />
      </div>
      <MembersHomeVillage />
    </motion.div>
  );
};

export default HomeVillageClan;
