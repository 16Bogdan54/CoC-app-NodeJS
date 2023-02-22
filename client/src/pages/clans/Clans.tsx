import { motion } from "framer-motion";
import { Button, TextField } from "@mui/material";
import { useRef } from "react";

import { validate } from "@/validation/formValidation";
import { useClanFetch } from "@/hooks/useClanFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import { unknown } from "zod";

const Clans = () => {
  const field = useRef<HTMLInputElement>(null);

  const [status, error] = useClanFetch(
    `/player-search/${field.current && field.current.value}`,
    "searchClanData"
  );

  if (status === "loading") return <Loader />;
  if (error) return <Error err={error} />;

  return (
    <motion.div
      className="bg-[#e9e9e1] p-3 min-h-[95vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <TextField
        ref={field}
        id="outlined-basic"
        label="Clan Tag"
        variant="outlined"
        onChange={(e) => {
          if (field.current) {
            field.current.value = e.target.value;
          }
        }}
      />

      <Button
        variant="contained"
        size="large"
        onClick={() => {
          if (field.current) validate(field.current.value);
        }}
      >
        Search
      </Button>
    </motion.div>
  );
};

export default Clans;
