import React from "react";
import ClanDescription from "@/components/clanDescription/ClanDescription";
import ClanStat from "@/components/clanStat/ClanStat";
import MembersHomeVillage from "@/components/membersHomeVillage/MembersHomeVillage";

const HomeVillageClan = () => {
  return (
    <>
      <div className="bg-[#7d7e66] grid grid-cols-2">
        <ClanDescription />
        <ClanStat />
      </div>
      <MembersHomeVillage />
    </>
  );
};

export default HomeVillageClan;
