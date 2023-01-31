"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const clashofclans_js_1 = require("clashofclans.js");
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
const formatsLogger = app.get('env') === "development" ? "dev" : "short";
dotenv_1.default.config();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)(formatsLogger));
const client = new clashofclans_js_1.Client({ keys: [process.env.API_TOKEN], cache: true, retryLimit: 2, restRequestTimeout: 5000 });
app.get('/', async (req, res) => {
    // await client.login({email: 'b.yunakov1654@gmail.com', password: '08642best'});
    const player = await client.getPlayer("#08JCCGUP");
    console.log(`${player.name} (${player.tag}) get`);
    res.json(player);
});
// (async () => {
//     await client.login({email: 'b.yunakov1654@gmail.com', password: '08642best'});
//
//     const player = await client.getPlayer("Q8JCCGUP");
//     console.log(`${player.name} (${player.tag})`)
// })();
app.listen(port);
//# sourceMappingURL=server.js.map