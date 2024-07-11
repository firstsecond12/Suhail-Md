const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923419159670" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "923419159670";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923419159670";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_39_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMSxcbiAgICAgICAgODksXG4gICAgICAgIDM4LFxuICAgICAgICA3NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMCxcbiAgICAgICAgNjksXG4gICAgICAgIDQ1LFxuICAgICAgICA0NyxcbiAgICAgICAgODAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUyLFxuICAgICAgICAyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MSxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MSxcbiAgICAgICAgMTExLFxuICAgICAgICA3MixcbiAgICAgICAgMjA0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTgyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDY1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDU3LFxuICAgICAgICA5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMyLFxuICAgICAgICAwLFxuICAgICAgICAxNCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNixcbiAgICAgICAgMTc0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA1NSxcbiAgICAgICAgMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY5LFxuICAgICAgICA4MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgzLFxuICAgICAgICA2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAzLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDI1LFxuICAgICAgICA3MixcbiAgICAgICAgMTkzLFxuICAgICAgICA4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDk1LFxuICAgICAgICA1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTEwLFxuICAgICAgICA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc3LFxuICAgICAgICAzNixcbiAgICAgICAgMjUyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDY0LFxuICAgICAgICAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDYyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjAyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk5oamxPUXV5TlpFZDN6RjlIMUhjY0xoQ0VRRXBlemd4SEs0bUM2OGx1R009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImFJVGF0cGZYVGxLa2stamxuQVVUbFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDQ5ZTk3YzMtZDgxMi00NmJhLWE3YmEtNWM1OThiNWNlOWFkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwOCxcbiAgICAgIDEwNixcbiAgICAgIDkxLFxuICAgICAgMCxcbiAgICAgIDEyMixcbiAgICAgIDE0OCxcbiAgICAgIDEzMixcbiAgICAgIDIxNCxcbiAgICAgIDExNCxcbiAgICAgIDEwLFxuICAgICAgMjUyLFxuICAgICAgMTYxLFxuICAgICAgMzMsXG4gICAgICA1LFxuICAgICAgMTUxLFxuICAgICAgMTE0LFxuICAgICAgMTM2LFxuICAgICAgOTIsXG4gICAgICAyMjUsXG4gICAgICAxNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY0LFxuICAgICAgNjcsXG4gICAgICAxMTIsXG4gICAgICAyMDksXG4gICAgICAyNSxcbiAgICAgIDEyMCxcbiAgICAgIDIyNixcbiAgICAgIDIxNyxcbiAgICAgIDIyLFxuICAgICAgNCxcbiAgICAgIDE5NyxcbiAgICAgIDE2LFxuICAgICAgMTkwLFxuICAgICAgMTgyLFxuICAgICAgNzUsXG4gICAgICAxNjIsXG4gICAgICAxMjMsXG4gICAgICA0MyxcbiAgICAgIDE4NCxcbiAgICAgIDI1NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI3RExTMjZZVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDE5MTU5NjcwOjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3MzY1MDU4NTc2NzkzODo1OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPdjZ2YzRGRU9McHdMUUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIko5MWZHUzNKR1NqYnNiWGxUdVhUeDJGRHVuZnVZbmpQK29RY3l4ZllLU0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUTI4TVYzN0dkVXVnd2NjelZmd20zQXg3ZlBrSHhmUW5hc3ZIOUh0aGVmOUlORmlGRVR4T0FFeGNGd0VRbFo0YUE0RlBIRzd0QU82V2ZMb2pSMlJyQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN1JKSTlCREM2NnVHODM5bzJyUjd5d1h4VS9HYzFFbTR6a1E4bnFzOVl6Q1pQYVlvSkxGZTFnWDk3QTZPRjdodW9mWnRkZG9INVFwL25iOFV0eExvQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDE5MTU5NjcwOjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDcyNjc1OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUhreFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSGt4Lmpzb24iOiAie1wia2V5RGF0YVwiOlwieW8wZlNnQi9vZUxlMTd0bHJBZFJ4QXF2R3g5ZTRuQUhNbkE1aC9nOHp0QT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTA2NzcwMjgzLFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA3MjY2OTAzOTVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "M ASWAD-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "M ASWAD",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
