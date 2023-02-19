import ClanDescription from "@/components/clanDescription/ClanDescription";
import ClanStat from "@/components/clanStat/ClanStat";
import MembersBuilderBase from "@/components/membersBuilderBase/MembersBuilderBase";
import { motion } from "framer-motion";

const BuilderBaseClan = () => {
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
      <MembersBuilderBase />
    </motion.div>
  );
};

export default BuilderBaseClan;
