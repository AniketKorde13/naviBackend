
import db from '../models';

const EmployeeDetalis: any = db.employeeDetails;

export const createEmployee = async (
    params: any
) => {
    
    const employee = await EmployeeDetalis.create({
        userId: params.userId,
        firstName: params.firstName,
        lastName: params.lastName,
        contact: params.contact,
        email: params.email,
        address: params.address,
        dateofBirth: params.dateofBirth,
    });

    return employee;

};

export const getAllEmployeeByuserId = async (userId: any) => await EmployeeDetalis.findAll({ where: userId });



export const getEmployeeById = async (id: any) => await EmployeeDetalis.findOne({ where: id });



export const updateEmployee = async (
    params: any,
) => {
    //console.log("id", id)
    const [updatedCount, updatedRec] = await EmployeeDetalis.update({

        // userId: params.userId,
        firstName: params.firstName,
        lastName: params.lastName,
        contact: params.contact,
        email: params.email,
        address: params.address,
        dateofBirth: params.dateofBirth,

    },
        { where: { id: params.id }, returning: true },

    );
    return { updatedCount, updatedRec }
};

export const deleteEmployee = async (id: any) => {
    return await EmployeeDetalis.destroy({ where: { id } });
};