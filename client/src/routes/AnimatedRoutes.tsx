import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";

const MyProfile = lazy(() => import("@/pages/myProfile/MyProfile"));
const MyClan = lazy(() => import("@/pages/myClan/MyClan"));
const Clans = lazy(() => import("@/pages/clans/Clans"));
const Profiles = lazy(() => import("@/pages/profiles/Profiles"));

const HomeVillagePlayer = lazy(
  () => import("@/pages/myProfile/HomeVillage/HomeVillagePlayer")
);

const AnimatedRoutes = () => {
  return (
    <AnimatePresence>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/my-profile" element={<MyProfile />}>
            <Route
              path="/my-profile/home-village-profile"
              element={<HomeVillagePlayer />}
            />
            <Route
              path="/my-profile/builder-base-profile"
              element={<div>Builder base</div>}
            />
            <Route
              path="/my-profile/clan-capital-profile"
              element={<div>Clan capital </div>}
            />
          </Route>
          <Route path="/my-clan" element={<MyClan />} />
          <Route path="/clans" element={<Clans />} />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
