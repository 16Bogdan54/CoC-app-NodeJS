import React, { ReactNode } from "react";
import { TableCell, TableRow, Typography } from "@mui/material";

type Props = {
  heading: string;
  children: ReactNode;
};

const ClanStatItem = ({ heading, children }: Props) => {
  return (
    <TableRow>
      <TableCell padding="none" size="small" component="th">
        <Typography className="text-white">{heading}</Typography>
      </TableCell>
      <TableCell align="right">
        <Typography className="text-white">{children}</Typography>
      </TableCell>
    </TableRow>
  );
};

export default ClanStatItem;
