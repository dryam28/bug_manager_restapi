import { DataTypes } from 'sequelize';
import sequelize from '../database/connectDB.js';
import Bug_Model from './Bug.js';

const Project_Model = sequelize.define(
    'projects',
    {
        id_project: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,

        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        timestamps: false,
    },
);

Project_Model.hasMany(Bug_Model)
Bug_Model.belongsTo(Project_Model)

export default Project_Model;
