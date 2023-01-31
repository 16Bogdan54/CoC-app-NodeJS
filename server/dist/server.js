"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const clashofclans_js_1 = require("clashofclans.js");
const app = (0, express_1.default)();
const formatsLogger = app.get('env') === "development" ? "dev" : "short";
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)(formatsLogger));
const client = new clashofclans_js_1.Client({ keys: ["eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImM3NzhjNWM5LWZhMjQtNDhkZC05MmNhLWMwM2MwMDlmOTdhMCIsImlhdCI6MTY3NTE2NzE2Niwic3ViIjoiZGV2ZWxvcGVyL2VlMzhhZjg0LWM5OGYtYWEzYi1mYjEzLWZlOWNlM2FiMDUzNiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjEwOS44Ny40NS4xIl0sInR5cGUiOiJjbGllbnQifV19.64nyQORHuQaQpHiYLhbVFgOGrW7uUelm_hX4eQ8Xm7EkBP8D8I_OWesH80Bw0lhrRIjn4tqLE3y7nTWKffVoIw"] });
// app.get('/', async (req,res) => {
//     await client.login({email: 'b.yunakov1654@gmail.com', password: '08642best'});
//
//     const player = await client.getPlayer("#08JCCGUP");
//     console.log(`${player.name} (${player.tag})`)
// })
(async () => {
    await client.login({ email: 'b.yunakov1654@gmail.com', password: '08642best' });
    const player = await client.getPlayer("Q8JCCGUP");
    console.log(`${player.name} (${player.tag})`);
})();
app.listen(3001, () => console.log("works"));
//# sourceMappingURL=server.js.map