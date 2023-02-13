import React from "react";
import ClanDescription from "@/components/clanDescription/ClanDescription";
import ClanStat from "@/components/clanStat/ClanStat";
import MembersBuilderBase from "@/components/membersBuilderBase/MembersBuilderBase";

const BuilderBaseClan = () => {
  return (
    <div>
      <ClanDescription />
      <ClanStat />
      <MembersBuilderBase />
    </div>
  );
};

export default BuilderBaseClan;
