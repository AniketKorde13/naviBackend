import express from 'express';
import { EMPTY_ROUTE, GET_EMPLOYEE_BY_ADMIN, ROUTES } from '../shared/constants/url';
import { handeleCreateEmployee, getAllEmployeeByUserId, handleGetEmployeeById, handleUpdateEmployee, handleDeleteEmployee } from '../controller/employee.controller';

const employeeRoute = express.Router();




employeeRoute.post(EMPTY_ROUTE, handeleCreateEmployee);
employeeRoute.get(GET_EMPLOYEE_BY_ADMIN, getAllEmployeeByUserId);
employeeRoute.get(ROUTES.GET_EMPLOYEE_BY_ID, handleGetEmployeeById);

employeeRoute.put(EMPTY_ROUTE, handleUpdateEmployee);


employeeRoute.delete(ROUTES.DELETE, handleDeleteEmployee);



export default employeeRoute;
