import ClanDescription from "@/components/clanDescription/ClanDescription";
import ClanStat from "@/components/clanStat/ClanStat";
import MembersBuilderBase from "@/components/membersBuilderBase/MembersBuilderBase";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

const BuilderBaseClan = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Grid
        container
        spacing={1}
        className="text-white grid grid-cols-2 p-2 rounded-lg"
      >
        <Grid item xs={12} md={6}>
          <ClanDescription />
        </Grid>
        <Grid item xs={12} md={6}>
          <ClanStat />
        </Grid>
        <Grid item xs={12}>
          <MembersBuilderBase />
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default BuilderBaseClan;
