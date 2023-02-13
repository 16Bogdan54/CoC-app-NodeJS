import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import Loader from "@/components/loader/Loader";

const MyProfile = lazy(() => import("@/pages/myProfile/MyProfile"));
const HomeVillagePlayer = lazy(
  () => import("@/pages/myProfile/homeVillage/HomeVillagePlayer")
);
const BuilderBasePlayer = lazy(
  () => import("@/pages/myProfile/builderBase/BuilderBasePlayer")
);

const ClanCapitalPlayer = lazy(
  () => import("@/pages/myProfile/clanCapital/ClanCapital")
);

const MyClan = lazy(() => import("@/pages/myClan/MyClan"));

const HomeVillageClan = lazy(
  () => import("@/pages/myClan/homeVillage/HomeVillageClan")
);

const BuilderBaseClan = lazy(
  () => import("@/pages/myClan/builderBase/BuilderBaseClan")
);

const Clans = lazy(() => import("@/pages/clans/Clans"));
const Profiles = lazy(() => import("@/pages/profiles/Profiles"));

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
              element={<ClanCapitalPlayer />}
            />
          </Route>
          <Route path="/my-clan" element={<MyClan />}>
            <Route path="/my-clan" element={<HomeVillageClan />} />
            <Route
              path="/my-clan/builder-base-clan"
              element={<BuilderBaseClan />}
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
