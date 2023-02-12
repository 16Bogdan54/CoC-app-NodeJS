import axios from "axios";

export const getClan = () => {
  return axios
    .get("http://localhost:3001/clan")
    .then((r) => r.data)
    .catch((err) => alert(JSON.stringify(err)));
};
