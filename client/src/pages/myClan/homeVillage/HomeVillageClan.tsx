import React from "react";
import ClanDescription from "@/components/clanDescription/ClanDescription";
import ClanStat from "@/components/clanStat/ClanStat";
import MembersHomeVillage from "@/components/membersHomeVillage/MembersHomeVillage";

const HomeVillageClan = () => {
  return (
    <div>
      <ClanDescription />
      <ClanStat />
      <MembersHomeVillage />
    </div>
  );
};

export default HomeVillageClan;
