import React from "react";
import ClanDescription from "@/components/clanDescription/ClanDescription";
import ClanCapitalStat from "@/components/clanCapitalStat/ClanCapitalStat";
import MembersHomeVillage from "@/components/membersHomeVillage/MembersHomeVillage";

const MyClanCapital = () => {
  return (
    <div>
      <ClanDescription />
      <ClanCapitalStat />
      <MembersHomeVillage />
    </div>
  );
};

export default MyClanCapital;
