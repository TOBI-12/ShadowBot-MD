import meme from "../lib/memes.js";
import {eMeme, sMeme, all} = from "discord.js-memes";

var handler = async (m, {conn}) => {
const allmeme = new sMeme();
  await conn.sendFile(m.chat, allmeme, "", "", m);
};
handler.help = ["memes"];
handler.tags = ["internet"];
handler.command = ["meme", "memes"];
handler.diamond = true;

export default handler;
