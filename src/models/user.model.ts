import { DataTypes, Sequelize } from 'sequelize';
import { auditColumns } from '../shared/utils/sequelize-model-helper';

/* eslint @typescript-eslint/no-unused-vars: "off" */
const UserModel = (sequelize: Sequelize, _Sequelize: any) => {
    const User = sequelize.define(
        'Users',
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
            },
            userType: {
                type: DataTypes.ENUM('Importer', 'Exporter', 'Both', 'Null'),
                allowNull: false,
            },
            roleId: {
                type: DataTypes.INTEGER,
            },
            isActive: {
                type: DataTypes.BOOLEAN,
            },
            isLogIn: {
                type: DataTypes.BOOLEAN,
            },
            ...auditColumns,
        },
        {
            defaultScope: {
                attributes: { exclude: ['password'] },
            },
            scopes: {
                withPassword: {
                    attributes: { exclude: [] },
                },
            },
            hooks: {
                afterCreate: (record: any) => {
                    /* eslint no-param-reassign: "off" */
                    delete record.dataValues.password;
                },
                afterUpdate: (record: any) => {
                    /* eslint no-param-reassign: "off" */
                    delete record.dataValues.password;
                },
            },
        }
    );
    return User;
};

export default UserModel;
