import MyProfileSubNavbar from "@/components/navbar/myProfileSubNavbar/MyProfileSubNavbar";
import { Outlet } from "react-router-dom";
import { usePlayerFetch } from "@/hooks/usePlayerFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";

const MyProfile = () => {
  const [status, error] = usePlayerFetch();

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <div className="bg-[#e9e9e1] p-3">
      <MyProfileSubNavbar />
      <Outlet />
    </div>
  );
};

export default MyProfile;
