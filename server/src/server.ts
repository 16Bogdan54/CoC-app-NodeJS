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
// Q8JCCGUP
app.get("/player", async (req, res) => {
  const player = await client.getPlayer("Q8JCCGUP");
  res.json(player);
});

app.get("/clan", async (req, res) => {
  const player = await client.getClan("8PCORQUU");
  res.json(player);
});

app.get("/clans/clan-search/:tag", async (req, res) => {
  const clan = await client.getClan(req.params.tag);
  res.json(clan);
});

app.get("/players/player-search/:tag", async (req, res) => {
  const clan = await client.getPlayer(req.params.tag);
  res.json(clan);
});

app.listen(port);
