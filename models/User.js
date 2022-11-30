import { DataTypes } from 'sequelize';
import sequelize from '../database/connectDB.js';

const User_Model = sequelize.define(
    'users',
    {
        id_user: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    },
);


export default User_Model;
