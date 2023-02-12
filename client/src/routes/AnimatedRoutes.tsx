import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import BuilderBasePlayer from "@/pages/myProfile/builderBase/BuilderBasePlayer";
import ClanCapital from "@/pages/myProfile/clanCapital/ClanCapital";
import HomeVillageClan from "@/pages/myClan/homeVillage/HomeVillageClan";
import Loader from "@/components/loader/Loader";

const MyProfile = lazy(() => import("@/pages/myProfile/MyProfile"));
const MyClan = lazy(() => import("@/pages/myClan/MyClan"));
const Clans = lazy(() => import("@/pages/clans/Clans"));
const Profiles = lazy(() => import("@/pages/profiles/Profiles"));

const HomeVillagePlayer = lazy(
  () => import("@/pages/myProfile/homeVillage/HomeVillagePlayer")
);

const AnimatedRoutes = () => {
  return (
    <AnimatePresence>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/my-profile" element={<MyProfile />}>
            <Route path="/my-profile" element={<HomeVillagePlayer />} />
            <Route
              path="/my-profile/builder-base-profile"
              element={<BuilderBasePlayer />}
            />
            <Route
              path="/my-profile/clan-capital-profile"
              element={<ClanCapital />}
            />
          </Route>
          <Route path="/my-clan" element={<MyClan />}>
            <Route path="/my-clan" element={<HomeVillageClan />} />
            <Route
              path="/my-clan/builder-base-clan"
              element={<div>builder base</div>}
            />
            <Route path="/my-clan/capital-clan" element={<div>capital</div>} />
          </Route>
          {/*</Route>*/}
          <Route path="/clans" element={<Clans />} />
          <Route path="/profiles" element={<Profiles />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
