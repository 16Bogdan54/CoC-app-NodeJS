import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
      <ClipLoader color="#F1D412" />
    </div>
  );
};

export default Loader;
