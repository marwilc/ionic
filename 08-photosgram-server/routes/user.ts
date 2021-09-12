import { hashSync } from 'bcrypt';
import { Request, Response, Router } from 'express';
import Token from '../class/token';
import { checkToken } from '../middlewares/auth';
import { IUser, User } from '../models/user.model';

const userRoutes = Router();

//Login
userRoutes.post('/login', (req: Request, res: Response) => {
    const body = req.body;

    User.findOne({ email: body.email }, (err, userDB: IUser) => {
        if (err) throw err;

        if (!userDB) {
            return res.json({
                ok: false,
                message: 'User/password invalid',
            });
        }

        if (userDB.passwordCompare(body.password)) {
            const token = Token.getJwtToken({
                _id: userDB._id,
                name: userDB.name,
                avatar: userDB.avatar,
                email: userDB.email,
            });

            res.json({
                ok: true,
                token,
            });
        } else {
            res.json({
                ok: false,
                message: 'User/password invalid ***',
            });
        }
    });
});

userRoutes.post('/create', async (req: Request, res: Response) => {
    const user: Partial<IUser> = {
        name: req.body.name,
        email: req.body.email,
        password: hashSync(req.body.password, 10),
        avatar: req.body.avatar,
    };

    try {
        const userCreated = await User.create(user);

        if (userCreated) {
            const token = Token.getJwtToken({
                _id: userCreated._id,
                name: userCreated.name,
                avatar: userCreated.avatar,
                email: userCreated.email,
            });

            return res.json({
                ok: true,
                message: 'All everything work good',
                token,
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

// update user
userRoutes.post(
    '/update',
    [checkToken],
    (req: any, res: Response) => {
        const user = {
            name: req.body.name || req.user.name,
            email: req.body.email || req.user.email,
            avatar: req.body.avatar || req.user.avatar,
        };

        User.findByIdAndUpdate(
            req.user._id,
            user,
            { new: true },
            (err, userDB) => {
                if (err) throw err;

                if (!userDB) {
                    return res.json({
                        ok: false,
                        message: 'User no exist',
                    });
                }

                const token = Token.getJwtToken({
                    _id: userDB._id,
                    name: userDB.name,
                    avatar: userDB.avatar,
                    email: userDB.email,
                });

                res.json({
                    ok: true,
                    message: 'All everything work good',
                    token,
                });
            }
        );
    }
);

userRoutes.get('/', [checkToken], (req: any, res: Response) => {
    const user = req.user;

    res.json({
        ok: true,
        user,
    });
});

export default userRoutes;
