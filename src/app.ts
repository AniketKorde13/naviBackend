import express, { Router } from 'express';
import cors from 'cors';
import passport from 'passport';
import { BASE_ROUTES, BASE_URL } from './shared/constants/url';
import { jwtStrategy } from './shared/utils/jwt-strategy';
import { errorHandler } from './shared/middlewares/error-handler.middleware';
import userRoute from './route/user.route';
import employeeRoute from './route/employee.route';

const app = express();

const corsOptions = {
    origin: '*',
};
app.use(cors(corsOptions));
app.use('/uploads/', express.static("uploads"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

passport.use(jwtStrategy);
app.use(passport.initialize());

app.get(BASE_URL, (req: any, res: any) => {
    res.json({ message: 'Welcome!' });
});

app.use(BASE_ROUTES.USERS, userRoute);
app.use(BASE_ROUTES.EMPLOYEE, employeeRoute);


app.use(errorHandler);

export { app };
