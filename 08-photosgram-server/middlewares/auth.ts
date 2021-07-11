import { NextFunction, Response } from 'express';
import Token from '../class/token';

export const checkToken = async (
    req: any,
    res: Response,
    next: NextFunction
) => {
    try {
        const userToken = req.get('x-token') || '';
        const decoded = await Token.checkToken(userToken);

        if (decoded) {
            req.user = decoded.user;
            next();
        }
    } catch (error) {
        res.json({
            ok: false,
            message: 'Invalid Token',
        });
    }
};
