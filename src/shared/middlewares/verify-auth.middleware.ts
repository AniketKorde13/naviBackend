import { NextFunction, Request, Response } from 'express';
import passport from 'passport';
import { NotAuthorizedError } from '../errors/not-authorized.error';

const verifyAuth = (req: Request, res: Response, next: NextFunction) =>
    passport.authenticate('jwt', { session: false }, (err: any, user: any) => {
        if (err || !user) {
            throw new NotAuthorizedError(err?.message ?? 'Unauthorized!');
        }
        console.log(user);
        
        user.host = req.get('host');
        user.remoteAddress = req.socket.remoteAddress;
        req.user = user;
        return next();
    })(req, res, next);

export default verifyAuth;
