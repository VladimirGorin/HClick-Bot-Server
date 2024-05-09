import { DataTypes } from "sequelize"
import { sequelize } from "../../init.js";

const UserModel = sequelize.define("user", {
    id: { type: DataTypes.BIGINT, primaryKey: true, unique: true, autoIncrement: true },
    chatId: { type: DataTypes.BIGINT, unique: true },
    username: { type: DataTypes.STRING },
    click: {type: DataTypes.INTEGER, defaultValue: 0 }
});

export { UserModel }
