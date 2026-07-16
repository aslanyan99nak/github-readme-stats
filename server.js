// Express wrapper to self-host github-readme-stats on any Node host (fly.io, etc.)
import express from "express";
import statsCard from "./api/index.js";
import topLangs from "./api/top-langs.js";
import pin from "./api/pin.js";
import gist from "./api/gist.js";
import wakatime from "./api/wakatime.js";

const app = express();

app.get("/", statsCard);
app.get("/api", statsCard);
app.get("/api/top-langs", topLangs);
app.get("/api/pin", pin);
app.get("/api/gist", gist);
app.get("/api/wakatime", wakatime);

const port = process.env.PORT || 8080;
app.listen(port, "0.0.0.0", () => console.log(`github-readme-stats listening on :${port}`));
