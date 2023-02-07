import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";

const MyProfile = lazy(() => import("../pages/myProfile/MyProfile"));
const MyClan = lazy(() => import("../pages/myClan/MyClan"));
const Clans = lazy(() => import("../pages/clans/Clans"));
const Profiles = lazy(() => import("../pages/profiles/Profiles"));

const AnimatedRoutes = () => {
  return (
    <AnimatePresence>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/myclan" element={<MyClan />} />
          <Route path="/clans" element={<Clans />} />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
