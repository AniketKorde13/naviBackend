
import { NextFunction, Request, Response } from 'express';
import { IUpdateUser, createUser, getAllUsers, getUserById, updateUser, deleteUser, orderFilter } from '../service/user.service';

export const handeleCreateUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userBody = req.body;
        const user = await createUser(userBody);
        return res.status(200).json(user);
    } catch (error:any) {
        console.error(error);
        next(error)
    }
};


export const handleGetAllUser = async (req: Request, res: Response) => {
    try {
        const { columnName, order, search, page, pageSize } = req.query;

        const limit = Number(pageSize) || 10;
        const pageNumber = Number(page) || 1;
        const offset = (pageNumber - 1) * limit;

        const response = await getAllUsers(
            columnName as string,
            order as string,
            search as string,
            limit,
            offset
        );

        res.status(200).json({
            data: response,
            page: pageNumber,
            pageSize: limit,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};


export const handleUpdateUser = async (req: Request, res: Response) => {
    try {
        //const { id } = req.params;
        const reqBody = req.body
        const response = await updateUser(reqBody);
        res.status(200).json({ data: response });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const handleGetUserBYId = async (req: any, res: Response) => {
    try {
        const id = req.params
        const response = await getUserById(id);
        res.status(200).json({ data: response });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const handleDeleteUser = async (
    req: any,
    res: Response,

) => {
    try {
        // const userId = req.user.id;
        const { id } = req.params;
        console.log(id, "id");

        const response = await deleteUser(id);

        res.status(200).json({ response, message: 'User Deleted Succesfully' });
    } catch (ex) {
        console.error(ex);

    }
};


// export const handelorderFilterUser = async (req: Request, res: Response) => {
//     try {
//         const { columnName, order } = req.body;
//         const user = await orderFilter(columnName, order);
//         return res.status(200).json(user);

//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ error: 'Internal Server Error' });
//     }
// };