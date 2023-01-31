import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import env from 'env';
import {Client} from "clashofclans.js";

const app = express();
const port = process.env.PORT || 3001;

const formatsLogger = app.get('env') === "development" ? "dev" : "short";
env.config();

app.use(express.json());
app.use(cors());
app.use(logger(formatsLogger))

const client = new Client({ keys: [process.env.API_TOKEN], cache: true, retryLimit: 2, restRequestTimeout: 5000 });

app.get('/', async (req,res) => {
    // await client.login({email: 'b.yunakov1654@gmail.com', password: '08642best'});
    const player = await client.getPlayer("#08JCCGUP");
    console.log(`${player.name} (${player.tag}) get`)
    res.json(player)
})

// (async () => {
//     await client.login({email: 'b.yunakov1654@gmail.com', password: '08642best'});
//
//     const player = await client.getPlayer("Q8JCCGUP");
//     console.log(`${player.name} (${player.tag})`)
// })();

app.listen(port)