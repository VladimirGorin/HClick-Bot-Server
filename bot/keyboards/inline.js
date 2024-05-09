import { Markup } from "telegraf";

// export const openWebAppKeyboard = {
//     inline_keyboard: [
//         [{ text: 'Открыть', web_app: { url: process.env.WEBAPP } }]
//     ]
// };[{ text: 'Открыть', web_app: { url: process.env.WEBAPP } }]
export const openWebAppKeyboard = Markup.inlineKeyboard([Markup.button.webApp("Открыть", process.env.WEBAPP)])
