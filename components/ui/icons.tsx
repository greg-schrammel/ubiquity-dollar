import btoa from "btoa";
import { renderToString } from "react-dom/server";
import svgs from "./svgs";

const b64svg = `data:image/svg+xml;base64,`;
const base64s = {} as Record<string, string>;

base64s["help"] = b64svg.concat(btoa(renderToString(svgs.help)));
base64s["liquidity"] = b64svg.concat(btoa(renderToString(svgs.liquidity)));
base64s["uad"] = b64svg.concat(btoa(renderToString(svgs.uad)));
base64s["ubq"] = b64svg.concat(btoa(renderToString(svgs.ubq)));
base64s["ucr-nft"] = b64svg.concat(btoa(renderToString(svgs.ucr)));
base64s["ucr"] = b64svg.concat(btoa(renderToString(svgs.ucr)));
base64s["usdc"] = b64svg.concat(btoa(renderToString(svgs.usdc)));
base64s["dai"] = b64svg.concat(btoa(renderToString(svgs.dai)));
base64s["usdt"] = b64svg.concat(btoa(renderToString(svgs.usdt)));
base64s["warning"] = b64svg.concat(btoa(renderToString(svgs.warning)));

base64s[
  "3crv"
] = `data:image/webp;base64,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`;
base64s[
  "uad3crv-f"
] = `data:image/webp;base64,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`;
export default { svgs, base64s };
