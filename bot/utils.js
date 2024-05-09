import { Telegraf } from "telegraf"

export function initBot() {
    const bot = new Telegraf(process.env.TOKEN, { polling: true });

    bot.launch()

    console.log("Bot has success started")

    return bot
}
