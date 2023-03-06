import { renderStars } from "@/components/utils/utils";

import style from "./achievement.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  name: string;
  info: string;
  stars: number;
};

const Achievement = ({ name, info, stars }: Props) => {
  return (
    <Accordion sx={{ my: 0.5, background: "#3681D8" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          {renderStars(stars)} {name}{" "}
          <span className="ml-auto text-2xl">✅</span>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{info}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Achievement;
