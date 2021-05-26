import { Request, Response, Router } from 'express';
import { IUser, User } from '../models/user.model';

const userRoutes = Router();

userRoutes.post('/create', async (req: Request, res: Response) => {
    const user: Partial<IUser> = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    };

    try {
        const userCreated = await User.create(user);

        if (userCreated) {
            return res.json({
                ok: true,
                message: 'All everything work good',
                userCreated,
            });
        }
    } catch (error) {
        console.log(error);
        return res.json({
            ok: false,
            message: 'All everything work bad',
            error,
        });
    }
});

export default userRoutes;
