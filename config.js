//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "9jalaughtv@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348057627946";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhCVjZaQlFyZ3VBWi9CMXoyb3E5NlFFeG9ucTNaTHQvQWNQMHhyd0VVST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1N2YVZRdjdHWTdJWTBkYjJrTndkR0JYZEJZdDdQL0x4OHFUcGpUbGtVMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TFhiaENYejdPdVFFZGtmaURsSkRHMnpnYVQrMlRhN2lUNXFySXJPQTE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDeFNQeFZrOFcvOTlkb3QxVXNJV0Q0Y3U2Qnc0alV0c3FqTVRLRDE0M21NPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNBNDVqMmVOTVNaNUNyM1d6bjJHZXd4blh4VU0xQUQwdmx2Ny9wWjZTMnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkYwNzZpc0hqM3dKSjE1SFVKYzN6NUVuVXNxSWxBU1F0QVhFNm9GRTMyWEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUVCQUh0TVJNc0pKLzl0L0ZwSTdiZU9lL1ZlUHZvUEl4eU9oZmlOTDAzND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZW1LSnZrTG91Rit1VmJNZkF3U2VuZGhyRUxTMCtwdlUrMVQ0bGVra21Bdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNrSkdSZWpaVHhUNzhmTjRKb25WaS91eFl0YkczKzZlU2Z3YWpZay81REQyNGErK2hwTE5Jb3hJZ2E1MS81OUVLdVZua2ljck5MQVBDUEM2U01sRGdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM5LCJhZHZTZWNyZXRLZXkiOiJ1Q2NkRnYweGdqWVZBaWRDbndQNjdOUnNSalRBVjMyMjNwTEJlcnFqMzJnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFd053b2NRWVFuZXJobmg0T1VtMWpRIiwicGhvbmVJZCI6ImQ0Y2E3ZWYxLTNiOWItNDVhNC1iNzg1LThhNGYyZTRkNmQ1NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQVVRxcm5oZ2RBUm9QOUpjZkNBMHhuYmNhak09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYlpYaWdQeXYyVmZ1SlB1ZlEwRFNTUlozSUpjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlZRQVhTV0xaIiwibWUiOnsiaWQiOiIyMzQ4MDU3NjI3OTQ2OjI3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IjlqYWxhdWdoIHR2In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOdktnNE1ERUl6NzA3c0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXUFRYWllGZGwwZjkrdTA4OFlRNEtHSFlEK3dXby9OUysxY2MyZ2hKR21FPSIsImFjY291bnRTaWduYXR1cmUiOiJxR3NDSnNadEtSYnNMcW5Na2R1VUcrYWJFMURjK2FVZ2ppY0NzeXNpSnU1OHNNT2lhOENKWTE5ek1BRzkzbHQ0QlgvTThtYTFnV3BiNG5seDZIWVpDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNU5QdGJlL0w4dlkzMjJyRHNDU2YvcW9ITy94N2JjSWlXelVkVEFwbWxyOGhEV2FjT25oeDVWcGtKRFl4dWN6Ym52MDhXQ21wZFNQRWN6cm1qa3ZFalE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDU3NjI3OTQ2OjI3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZqMDEyV0JYWmRIL2ZydFBQR0VPQ2hoMkEvc0ZxUHpVdnRYSE5vSVNScGgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU3MjAzNDV9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`9jalaugh_TV™`",
  author: process.env.PACK_AUTHER || "9jalaugh_TV, wa.me/2348057627946",
  packname: process.env.PACK_NAME || "9jalaugh_TV, wa.me/2348057627946",
  botname: process.env.BOT_NAME || "9jalaughtv_Bot",
  ownername: process.env.OWNER_NAME || "9jalaughtv Admin",
  errorChat: process.env.ERROR_CHAT || "I don't understand you boss",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
