import { Op } from 'sequelize';
import db from '../models';

const UserDetails: any = db.userDetails;

export const createUserDetails = async (
    params: any,
    userId: any,
    IPAddress: any,
    host: any
) => {
    try {
        const createUserDetails = await UserDetails.create({
            userId,
            firstName: params.firstName,
            lastName: params.lastName,
            email: params.email,
            companyName: params.companyName,
            companyReferencePerson: params.companyReferencePerson,
            phone: params.phone,
            address: params.address,
            country: params.country,
            profileImage: params.profileImage,
            createdBy: userId,
            createdAt: new Date(),
            isActive: params.isActive || true,
            IPAddress,
            HOST: host,
        });

        return createUserDetails;
    } catch (error) {
        console.error('Error creating user details:', error);
        throw error;
    }
};

export const UpdateUserDetails = async (
    params: any,
    userId: any,
    IPAddress: any,
    host: any,
    id: any
) => {
    try {
        const updateUserDetails = await UserDetails.update(
            {
                userId,
                firstName: params.firstName,
                lastName: params.lastName,
                email: params.email,
                companyName: params.companyName,
                companyReferencePerson: params.companyReferencePerson,
                phone: params.phone,
                address: params.address,
                country: params.country,
                profileImage: params.profileImage,
                createdBy: userId,
                createdAt: new Date(),
                isActive: params.isActive || true,
                isApprove: null,
                IPAddress,
                HOST: host,
            },
            {
                where: { id },
            }
        );

        return updateUserDetails;
    } catch (error) {
        console.error('Error updating user details:', error);
        throw error;
    }
};

export const getAllUserswithPagination = async (
    userType: any,
    limit: any,
    offset: any,
    searchKey: any
) => {
    try {
        const roleCondition: any[] = [
            {
                roleId: {
                    [Op.not]: [1, 2],
                },
            },
        ];
        const userTypeCondition: any[] = [
            {
                userType: {
                    [Op.not]: 'Null',
                },
            },
        ];

        const whereClause = userType
            ? {
                userType,
                [Op.and]: [roleCondition, userTypeCondition],
            }
            : {
                [Op.and]: [roleCondition, userTypeCondition],
            };

        const usersByType = await UserDetails.findAndCountAll({
            where: whereClause,
            attributes: { include: ['userType', 'id', 'createdAt'] },
            limit,
            offset,
            order: [['createdAt', 'DESC']],
        });

        const totalCount = usersByType.count;
        const totalPages = Math.ceil(totalCount / limit);

        return {
            count: totalCount,
            data: usersByType.rows,
            pageNumber: offset / limit + 1,
            pageSize: limit,
            totalPages,
        };
    } catch (error) {
        console.error('Error fetching users by type from the database:', error);
        throw new Error('Error fetching users by type from the database');
    }
};

export const getAllUserswithPaginationIsApproved = async (
    userType: any,
    limit: any,
    offset: any,
    searchKey: any,
    isApprove: boolean
) => {
    try {
        const roleCondition: any[] = [
            {
                roleId: {
                    [Op.not]: [1, 2],
                },
            },
        ];
        const userTypeCondition: any[] = [
            {
                userType: {
                    [Op.not]: 'Null',
                },
            },
        ];

        const whereClause = userType
            ? {
                userType,
                [Op.and]: [roleCondition, userTypeCondition],
            }
            : {
                [Op.and]: [roleCondition, userTypeCondition],
            };

        const usersByType = await UserDetails.findAndCountAll({
            where: whereClause,
            attributes: { include: ['userType', 'id', 'createdAt'] },
            limit,
            offset,
            order: [['createdAt', 'DESC']],
        });
        const totalCount = usersByType.count;
        const totalPages = Math.ceil(totalCount / limit);

        return {
            count: totalCount,
            data: usersByType.rows,
            pageNumber: offset / limit + 1,
            pageSize: limit,
            totalPages,
        };
    } catch (error) {
        console.error('Error fetching users by type from the database:', error);
        throw new Error('Error fetching users by type from the database');
    }
};
