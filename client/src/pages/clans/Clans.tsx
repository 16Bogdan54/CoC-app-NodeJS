import { motion } from "framer-motion";
import { Button, TextField } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import { validate } from "@/validation/formValidation";
import { useClanFetch } from "@/hooks/useClanFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";

const Clans = () => {
  const DEFAULT_TAG: string = "8PCORQUU";

  const [tag, setTag] = useState<string>(() => DEFAULT_TAG);
  const field = useRef<string>("");

  const [status, error] = useClanFetch(
    `http://localhost:3001/clans/clan-search/${tag}`,
    "searchClanData"
  );

  useEffect(() => {
    console.count("hi");
  }, [tag]);

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
        id="outlined-basic"
        label="Clan Tag"
        variant="outlined"
        onChange={(e) => {
          field.current = e.target.value;
        }}
      />

      <Button
        variant="contained"
        size="large"
        onClick={() => {
          if (validate(field.current)) {
            console.log(field.current);
            setTag(field.current);
          }
        }}
      >
        Search
      </Button>
    </motion.div>
  );
};

export default Clans;
