import { bot } from "../../init.js";
import { UserModel } from "../../database/models/user.js";
import { openWebAppKeyboard } from "../keyboards/inline.js";

bot.on("message", async ctx => {
    const text = ctx.message.text
    const chatId = ctx.chat.id
    const username = ctx.from?.username ? `@${ctx.from?.username}` : ctx.from.first_name

    const user = await UserModel.findOne({ where: { chatId } });

    if (!user){
        await UserModel.create({chatId, username})
    }

    switch (text) {
        case "/start":

            ctx.reply('Привет, что бы по кликать на уточку, нажми на кнопку ниже :)', openWebAppKeyboard)
            break;

        default:
            break;
    }

})
