import { motion } from "framer-motion";
import { Button, TextField } from "@mui/material";
import React, { useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { validate } from "@/validation/formValidation";
import axios from "axios";
import SearchPlayer from "@/components/searchClan/SearchPlayer";
import { useClanFetch } from "@/hooks/useClanFetch";
import Loader from "@/components/loader/Loader";
import Error from "@/components/error/Error";

const Clans = () => {
  const DEFAULT_TAG: string = "8PCORQUU";
  const field = useRef<string>(DEFAULT_TAG);

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (tag: string) => {
      return axios.get(`http://localhost:3001/clans/clan-search/${tag}`);
    },
    onSuccess: (res) => {
      queryClient.setQueryData(["searchClan"], res.data);
    },
  });

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
        disabled={mutation.isLoading}
        onClick={(e) => {
          if (validate(field.current)) {
            e.preventDefault();
            // setTag(field.current);
            mutation.mutate(field.current);
          }
        }}
      >
        {mutation.isLoading ? "Loading..." : "Search"}
      </Button>
      <SearchPlayer tag={field.current} />
    </motion.div>
  );
};

export default Clans;
