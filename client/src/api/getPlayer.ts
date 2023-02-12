import axios from "axios";

export const getPlayer = () => {
  return axios
    .get("http://localhost:3001/player")
    .then((r) => r.data)
    .catch((err) => alert(JSON.stringify(err)));
};
