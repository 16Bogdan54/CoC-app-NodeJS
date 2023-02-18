import React, { ReactNode } from "react";

type Props = {
  heading: string;
  children: ReactNode;
};

const ClanStatItem = ({ heading, children }: Props) => {
  return (
    <>
      <div className="flex justify-between">
        <span>{heading}:</span>
        {children}
      </div>
      <hr />
    </>
  );
};

export default ClanStatItem;
