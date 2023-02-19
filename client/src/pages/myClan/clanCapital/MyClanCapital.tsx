import React from "react";
import ClanDescription from "@/components/clanDescription/ClanDescription";
import ClanCapitalStat from "@/components/clanCapitalStat/ClanCapitalStat";
import MembersHomeVillage from "@/components/membersHomeVillage/MembersHomeVillage";

const MyClanCapital = () => {
  return (
    <>
      <div className="bg-[#7d7e66] grid grid-cols-2 p-2 rounded-lg">
        <ClanDescription />
        <ClanCapitalStat />
      </div>
      <MembersHomeVillage />
    </>
  );
};

export default MyClanCapital;
