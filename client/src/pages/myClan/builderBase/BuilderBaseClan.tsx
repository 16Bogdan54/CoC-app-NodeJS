import React from "react";
import ClanDescription from "@/components/clanDescription/ClanDescription";
import ClanStat from "@/components/clanStat/ClanStat";
import MembersBuilderBase from "@/components/membersBuilderBase/MembersBuilderBase";

const BuilderBaseClan = () => {
  return (
    <>
      <div className="bg-[#7d7e66] grid grid-cols-2 p-2 rounded-lg">
        <ClanDescription />
        <ClanStat />
      </div>
      <MembersBuilderBase />
    </>
  );
};

export default BuilderBaseClan;
