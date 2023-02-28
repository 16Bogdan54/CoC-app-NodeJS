import { motion } from "framer-motion";
import { Button, TextField } from "@mui/material";
import { useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { validate } from "@/validation/formValidation";
import { useClanFetch } from "@/hooks/useClanFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";
import axios from "axios";
import SearchPlayer from "@/components/searchClan/SearchPlayer";

const Clans = () => {
  const DEFAULT_TAG: string = "8PCORQUU";

  const [tag, setTag] = useState<string>(() => DEFAULT_TAG);
  const field = useRef<string>("");

  const [status, error] = useClanFetch(
    `http://localhost:3001/clans/clan-search/${tag}`,
    "searchClan"
  );

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (tag: string) => {
      return axios.get(`http://localhost:3001/clans/clan-search/${tag}`);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["searchClan"], data);
      setTag(field.current);
    },
  });

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
            // setTag(field.current);
            setTag(field.current);
            mutation.mutate(field.current);
          }
        }}
      >
        Search
      </Button>
      <SearchPlayer />
    </motion.div>
  );
};

export default Clans;
