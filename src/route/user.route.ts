
import express from 'express';
import { handeleCreateUser, handleGetAllUser, handleUpdateUser, handleDeleteUser, handleGetUserBYId } from '../controller/user.controller';
import { EMPTY_ROUTE, ROUTES } from '../shared/constants/url';

const userRoute = express.Router();

userRoute.post(EMPTY_ROUTE, handeleCreateUser);
userRoute.get(ROUTES.LIST, handleGetAllUser);
userRoute.get(ROUTES.ID, handleGetUserBYId);
userRoute.put(EMPTY_ROUTE, handleUpdateUser);

userRoute.delete(ROUTES.DELETE, handleDeleteUser);


// userRoute.post(EMPTY_ROUTE, handeleCreateEmployee);

// userRoute.post(ROUTES.ORDER_LIST, handelorderFilterUser);

export default userRoute;
