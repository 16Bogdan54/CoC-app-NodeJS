import { motion } from "framer-motion";
import { Button, TextField } from "@mui/material";

const Clans = () => {
  return (
    <motion.div
      className="bg-[#e9e9e1] p-3 min-h-[95vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TextField id="outlined-basic" label="Clan Tag" variant="outlined" />
      <Button variant="contained" size="large">
        Search
      </Button>
    </motion.div>
  );
};

export default Clans;
