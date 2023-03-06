import MyProfileSubNavbar from "@/components/navbar/myProfileSubNavbar/MyProfileSubNavbar";
import { Outlet } from "react-router-dom";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import { motion } from "framer-motion";
import { Grid } from "@mui/material";

const MyProfile = () => {
  const [status, error] = usePlayerFetch(
    "http://localhost:3001/player",
    "playerData"
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
      <Grid container spacing={2} mt={8}>
        <Grid item xs={12} md={3}>
          <MyProfileSubNavbar />
        </Grid>
        <Grid item xs={12} md={9}>
          <Outlet />
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default MyProfile;
