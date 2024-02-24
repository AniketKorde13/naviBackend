import { DataTypes, Sequelize } from 'sequelize';
import { auditColumns } from '../shared/utils/sequelize-model-helper';

const employeeDetalisModel = (sequelize: Sequelize, _Sequelize: any) => {
    const Employee = sequelize.define('Employee', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        firstName: {
            type: DataTypes.STRING(50),
        },
        lastName: {
            type: DataTypes.STRING(50),
        },
        contact: {
            type: DataTypes.STRING(20),
        },
        email: {
            type: DataTypes.STRING(100),
            unique: true,
        },
        address: {
            type: DataTypes.STRING(255),
        },
        dateofBirth: {
            type: DataTypes.DATE,
        },

        ...auditColumns,
    });

    return Employee;
};

export default employeeDetalisModel;


