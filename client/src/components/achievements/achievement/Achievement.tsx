import { renderStars } from "@/components/utils/utils";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

type Props = {
  name: string;
  info: string;
  stars: number;
};

const Achievement = ({ name, info, stars }: Props) => {
  return (
    <Accordion sx={{ my: 0.5, background: "#3681D8", color: "white" }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          {renderStars(stars)} {name}
          <CheckCircleOutlineIcon sx={{ background: "green", mx: 1, p: 0.1 }} />
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{info}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default Achievement;
