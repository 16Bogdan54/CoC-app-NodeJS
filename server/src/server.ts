import express from "express";
import cors from "cors";
import logger from "morgan";
import env from "dotenv";
import { Client } from "clashofclans.js";

const app = express();
const port = process.env.PORT || 3001;

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
env.config();

app.use(express.json());
app.use(cors());
app.use(logger(formatsLogger));

const client = new Client({
  keys: [process.env.API_TOKEN],
  cache: true,
  retryLimit: 2,
  restRequestTimeout: 5000,
});

app.get("/player", async (req, res) => {
  const player = await client.getPlayer("Q8JCCGUP");
  res.json(player);
});

app.get("/clan", async (req, res) => {
  const player = await client.getClan("8PCORQUU");
  res.json(player);
});

app.get("/clan-search/:tag", async (req, res) => {
  const player = await client.getClan(req.params.tag);
  res.json(player);
});

app.get("/player-search/:tag", async (req, res) => {
  const player = await client.getPlayer(req.params.tag);
  res.json(player);
});

app.listen(port);
