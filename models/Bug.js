import { DataTypes } from 'sequelize';
import sequelize from '../database/connectDB.js';
import User_Model from './User.js';

const Bug_Model = sequelize.define(
    'bugs',
    {
        id_bug: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        creationDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    },
);

User_Model.hasOne(Bug_Model)

export default Bug_Model;
