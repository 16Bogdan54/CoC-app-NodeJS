import ClanDescription from "@/components/clanDescription/ClanDescription";
import ClanCapitalStat from "@/components/clanCapitalStat/ClanCapitalStat";
import MembersHomeVillage from "@/components/membersHomeVillage/MembersHomeVillage";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

const MyClanCapital = () => {
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
          <ClanCapitalStat />
        </Grid>
        <Grid item xs={12}>
          <MembersHomeVillage />
        </Grid>
      </Grid>
      =
    </motion.div>
  );
};

export default MyClanCapital;
