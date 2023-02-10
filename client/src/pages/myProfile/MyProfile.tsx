import SubNavbar from "@/components/navbar/subNavbar/SubNavbar";
import { Outlet } from "react-router-dom";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";

const MyProfile = () => {
  const [status, error] = usePlayerFetch();

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <div>
      <SubNavbar />
      <Outlet />
    </div>
  );
};

export default MyProfile;
