import { NextFunction, Request, Response } from 'express';
import { createEmployee, getAllEmployeeByuserId, getEmployeeById, updateEmployee, deleteEmployee } from '../service/employee.service';

export const handeleCreateEmployee = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        console.log(payload, 'payload');

        const employee = await createEmployee(payload);
        return res.status(200).json(employee);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getAllEmployeeByUserId = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {

        const userId = req.params;
        const response = await getAllEmployeeByuserId(userId);
        res.status(200).json({ data: response });
    } catch (ex) {
        next(ex);
    }
};
export const handleGetEmployeeById = async (req: any, res: Response) => {
    try {
        const id = req.params
        const response = await getEmployeeById(id);
        res.status(200).json({ data: response });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const handleUpdateEmployee = async (req: Request, res: Response) => {
    try {
        //const { id } = req.params;
        const reqBody = req.body
        const response = await updateEmployee(reqBody);
        res.status(200).json({ data: response });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const handleDeleteEmployee = async (
    req: any,
    res: Response,

) => {
    try {
        // const userId = req.user.id;
        const { id } = req.params;
        console.log(id, "id");

        const response = await deleteEmployee(id);

        res.status(200).json({ response, message: 'Employee Deleted Succesfully' });
    } catch (ex) {
        console.error(ex);

    }
};