import { motion } from "framer-motion";

const Clans = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Clans</h1>
    </motion.div>
  );
};

export default Clans;
