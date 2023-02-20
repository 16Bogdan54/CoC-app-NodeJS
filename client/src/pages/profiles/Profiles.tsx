import { Button, TextField } from "@mui/material";
import { motion } from "framer-motion";

const Profiles = () => {
  return (
    <motion.div
      className="bg-[#e9e9e1] p-3 min-h-[95vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TextField id="outlined-basic" label="Player Tag" variant="outlined" />
      <Button variant="contained" size="large">
        Search
      </Button>
    </motion.div>
  );
};

export default Profiles;
