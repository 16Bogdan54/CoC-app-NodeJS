import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[90vh] w-full flex justify-center items-center">
      <ClipLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
