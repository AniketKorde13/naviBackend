import { Sequelize } from 'sequelize';
import config from '../config/db.config';
import UserDetailsModel from './userDetails.model';
import employeeDetailsModel from './employeeDetails.model';

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: <any>0,
    // logging: true,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle,
    },
});
const db = {
    Sequelize,
    sequelize,
    userDetails: UserDetailsModel(sequelize, Sequelize),
    employeeDetails: employeeDetailsModel(sequelize, Sequelize),


};
// db.employeeDetails
//     .sync({ alter: true })
//     .then((res: any) => console.log(res))
//     .catch((error: any) => console.log(error));

export default db;
