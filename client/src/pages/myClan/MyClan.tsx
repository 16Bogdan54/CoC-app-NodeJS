import { useClanFetch } from "@/hooks/useClanFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import MyClanSubNavbar from "@/components/navbar/myClanSubNavbar/MyClanSubNavbar";
import { Outlet } from "react-router-dom";

const MyClan = () => {
  const [status, error] = useClanFetch();

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <div className="bg-[#e9e9e1] p-3">
      <MyClanSubNavbar />
      <Outlet />
    </div>
  );
};

export default MyClan;
