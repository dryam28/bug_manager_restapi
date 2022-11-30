import { Sequelize } from 'sequelize';

const { DB_NAME, DB_USER, DB_Password, DB_HOST, DB_PORT } = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_Password, {
    host: DB_HOST,
    dialect: 'postgres',
    port: DB_PORT
});

sequelize
    .authenticate()
    .then(() =>
        console.log('Database connection has been established successfully.'),
    )
    .catch(e => console.error('Unable to connect to the database:', e.message));

export default sequelize;
