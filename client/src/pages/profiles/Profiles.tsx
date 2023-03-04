import { Box, Button, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useRef } from "react";

import { validate } from "@/validation/formValidation";
import SearchPlayer from "@/components/searchPlayer/searchPlayer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const Profiles = () => {
  const DEFAULT_TAG: string = "Q8JCCGUP";
  const field = useRef<string>(DEFAULT_TAG);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (tag: string) => {
      return axios.get(`http://localhost:3001/players/player-search/${tag}`);
    },
    onSuccess: (res) => {
      queryClient.setQueryData(["playerSearch"], res.data);
    },
  });

  return (
    <motion.div
      className="p-3 min-h-[95vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box
        className="bg-white w-fit px-4 py-2 flex items-center justify-between gap-2 rounded-lg"
        mt={10}
      >
        <TextField
          id="outlined-basic"
          label="Player Tag"
          variant="outlined"
          size="small"
          onChange={(e) => {
            field.current = e.target.value;
          }}
        />
        <Button
          variant="contained"
          size="large"
          disabled={mutation.isLoading}
          onClick={() => {
            if (validate(field.current)) {
              mutation.mutate(field.current);
            }
          }}
        >
          {mutation.isLoading ? "Loading..." : "Search"}
        </Button>
      </Box>
      <SearchPlayer tag={field.current} />
    </motion.div>
  );
};

export default Profiles;
