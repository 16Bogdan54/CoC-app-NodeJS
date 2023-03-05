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
  try {
    const player = await client.getPlayer("Q8JCCGUP");
    if (!player) res.status(404).json({ error: "PLayer not found" });
    res.json(player);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

app.get("/clan", async (req, res) => {
  try {
    const clan = await client.getClan("8PCORQUU");
    if (!clan) res.status(404).json({ error: "Clan not found" });
    res.json(clan);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

app.get("/clans/clan-search/:tag", async (req, res) => {
  try {
    const clan = await client.getClan(req.params.tag);
    if (!clan) res.status(404).json({ error: "Clan not found" });
    res.json(clan);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

app.get("/players/player-search/:tag", async (req, res) => {
  try {
    const player = await client.getPlayer(req.params.tag);
    if (!player) res.status(404).json({ error: "PLayer not found" });
    res.json(player);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

app.listen(port);
