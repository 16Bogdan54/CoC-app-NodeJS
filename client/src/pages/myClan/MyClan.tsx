import { useClanFetch } from "@/hooks/useClanFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import MyClanSubNavbar from "@/components/navbar/myClanSubNavbar/MyClanSubNavbar";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

const MyClan = () => {
  const [status, error] = useClanFetch(
    "http://localhost:3001/clan",
    "clanData"
  );

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <motion.div
      className="p-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Grid container spacing={2}>
        <Grid item md={3}>
          <MyClanSubNavbar />
        </Grid>
        <Grid item md={9}>
          <Outlet />
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default MyClan;
