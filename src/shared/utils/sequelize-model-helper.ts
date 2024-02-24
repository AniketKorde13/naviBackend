import { DataTypes } from 'sequelize';

export const auditColumns = {
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    createdBy: {
        type: DataTypes.UUID,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date()
    },
    updatedBy: {
        type: DataTypes.UUID,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
    },
    IPAddress: {
        type: DataTypes.STRING,
    },
    HOST: {
        type: DataTypes.STRING,
    }
};
