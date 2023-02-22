import MyProfileSubNavbar from "@/components/navbar/myProfileSubNavbar/MyProfileSubNavbar";
import { Outlet } from "react-router-dom";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import { motion } from "framer-motion";

const MyProfile = () => {
  const [status, error] = usePlayerFetch("http://localhost:3001/player");

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <motion.div
      className="bg-[#e9e9e1] p-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MyProfileSubNavbar />
      <Outlet />
    </motion.div>
  );
};

export default MyProfile;
