import { DataTypes, Sequelize } from 'sequelize';
import { auditColumns } from '../shared/utils/sequelize-model-helper';

const UserDetailsModel = (sequelize: Sequelize, _Sequelize: any) => {
    const UserDetails = sequelize.define('UserDetails', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        FirstName: {
            type: DataTypes.STRING(50),
        },
        LastName: {
            type: DataTypes.STRING(50),
        },
        Contact: {
            type: DataTypes.STRING(20),
        },
        Email: {
            type: DataTypes.STRING(100),
            unique: true,
        },
        Address: {
            type: DataTypes.STRING(255),
        },
        AadharNumber: {
            type: DataTypes.STRING(20),
        },

        PANNumber: {
            type: DataTypes.STRING(20),
        },

        FatherName: {
            type: DataTypes.STRING(255),
        },

        MotherName: {
            type: DataTypes.STRING(255),
        },
        filename: {
            type: DataTypes.STRING,
        },

        ...auditColumns,
    });

    return UserDetails;
};

export default UserDetailsModel;


