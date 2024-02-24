import { Op, Sequelize } from 'sequelize';
import { WhereOptions } from 'sequelize/types';
import db from '../models';
import { getPasswordHash } from '../shared/utils/auth-utils';
import { InvalidCredentialsError } from '../shared/errors/invalid-credentials.error';

const userDetails: any = db.userDetails;

export const createUser = async (
    params: any, order: string = 'ASC'
) => {
    const isUserExisting = await userDetails.findOne({
        where: { Email: params.Email }
    });
    if (isUserExisting) {
        throw new Error("User already exist please enter another email id");
    }
    const user = await userDetails.create({
        FirstName: params.FirstName,
        LastName: params.LastName,
        Contact: params.Contact,
        Email: params.Email,
        Address: params.Address,
        AadharNumber: params.AadharNumber,
        PANNumber: params.PANNumber,
        FatherName: params.FatherName,
        MotherName: params.MotherName,
        filename: params.filename
    });

    // const sortedUsers = await userDetails.findAll({
    //     order: [['FirstName', order]]
    // });

    return { message: "Sucessfully created user", Response: user };
};

export const orderFilter = async (columnName: string, order: string) => {
    const sortedUsers = await userDetails.findAll({
        order: [[columnName, order]]
    });

    return sortedUsers;
};


export const updateUser = async (
    params: any,
) => {
    //console.log("id", id)
    const [updatedCount, updatedRec] = await userDetails.update({

        FirstName: params.FirstName,
        LastName: params.LastName,
        Contact: params.Contact,
        Email: params.Email,
        Address: params.Address,
        AadharNumber: params.AadharNumber,
        PANNumber: params.PANNumber,
        FatherName: params.FatherName,
        MotherName: params.MotherName,
        filename: params.filename
    },
        { where: { id: params.id }, returning: true },

    );
    return { updatedCount, updatedRec }
};



export const getAllUsers = async (
    columnName?: string,
    order: string = 'asc',
    searchQuery: string = '',
    limit: number = 10,
    offset: number = 0
) => {
    let whereClause = {};

    if (searchQuery) {
        whereClause = {
            [Op.or]: [
                { FirstName: { [Op.iLike]: `%${searchQuery}%` } },
                { LastName: { [Op.iLike]: `%${searchQuery}%` } },
                { Email: { [Op.iLike]: `%${searchQuery}%` } },
                { Contact: { [Op.iLike]: `%${searchQuery}%` } },
            ],
        };
    }

    let sorting: any = [];
    if (columnName) {
        sorting = [[columnName, order]];
    }

    try {
        const { rows: sortedUsers, count: totalCount } = await userDetails.findAndCountAll({
            where: whereClause,
            order: sorting, // Apply sorting conditionally
            limit,
            offset,
        });

        return {
            sortedUsers,
            count: totalCount,
        };
    } catch (error) {
        console.error("Error fetching users from the database:", error);
        throw new Error("Error fetching users from the database");
    }
};



// export const getAllUsers = orderFilter; // Reusing orderFilter as getAllUsers


export const IUpdateUser = async (
    id: any
) => await userDetails.update()

export const getUserById = async (id: any) => await userDetails.findOne({ where: id });

export const deleteUser = async (id: any) => {
    return await userDetails.destroy({ where: { id } });
};
