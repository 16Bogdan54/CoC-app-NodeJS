import axios from "axios";

export const getData = () => {
  const res = axios.get("http://localhost:3001/player").then((r) => r.data);
  res.then((response) => console.log(response));
  return res;
};
